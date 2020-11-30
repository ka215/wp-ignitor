/**
 * Await until next process at specific millisec
 * @param {number} [msec=1000] - Milliseconds
 * @usage `sleep(2000).then(() => { Next Process })`
 */
function sleep( msec = 1000 ) {
    return new Promise((resolve) => { setTimeout(() => { resolve() }, msec) })
}

/**
 * Determine whether variable is an Object
 * @param {!(number|string|Object|boolean)} item - Variable you want to check
 * @return {boolean}
 */
function isObject( o ) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object
}

/**
 * Determine whether variable is an Element
 * @param {!(number|string|Object|boolean)} node - Variable you want to check
 * @return {boolean}
 */
function isElement( node ) {
    try {
        return node instanceof HTMLElement
    } catch( e ) {
        if ( ( typeof node === 'object' ) && ( node.nodeType === 1 ) && ( typeof node.style === 'object' ) && ( typeof node.ownerDocument === 'object' ) ) {
            return true
        } else {
            return !!( node && ( node.nodeName || ( node.prop && node.attr && node.find ) ) )
        }
    }
}

/**
 * Merge multiple objects given as arguments, maintaining a deep hierarchy
 * @param {!Object} args[0] - Object to merge from
 * @param {!Object} args[n] - Any objects to merge
 * @return {Object}
 */
function extend( ...args ) {
    const to = Object( args[0] )
    for ( let i = 1; i < args.length; i += 1 ) {
        const nextSource = args[i]
        if ( nextSource !== undefined && nextSource !== null ) {
            const keysArray = Object.keys( Object( nextSource ) )
            for ( let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1 ) {
                const nextKey = keysArray[nextIndex]
                const desc = Object.getOwnPropertyDescriptor( nextSource, nextKey )
                if ( desc !== undefined && desc.enumerable ) {
                    if ( isObject( to[nextKey] ) && isObject( nextSource[nextKey] ) ) {
                        extend( to[nextKey], nextSource[nextKey] )
                    } else if ( ! isObject( to[nextKey] ) && isObject( nextSource[nextKey] ) ) {
                        to[nextKey] = {}
                        extend( to[nextKey], nextSource[nextKey] )
                    } else {
                        to[nextKey] = nextSource[nextKey]
                    }
                }
            }
        }
    }
    return to
}

/**
 * Check property in an object as same `Object.prototype.hasOwnProperty.call()`
 * @param {!string} prop - Check property name
 * @param {!Object} obj - Target object
 * @return {boolean}
 */
function hasProp( prop, obj ) {
    return !!(obj) && Object.prototype.hasOwnProperty.call( obj, prop )
}

/**
 * Custom exception logging
 *
 * @param {!string} message - Message body to notify
 * @param {string} [type="error"] - Notification type
 * @return {void}
 */
function logger( message, type = 'error' ) {
    if ( 'error' === type ) {
        throw new Error( message )
    } else {
        console[type]( message )
    }
}

/**
 * Parse the string like JavaScript object to actual Object
 * @public
 * @param {string} str
 */
function parseObject( str ) {
    let newObj = {},
        _tmp

    try {
        newObj = JSON.parse(str)
    } catch( e ) {
        _tmp = str.trim().replace(/^(\{|\[)+|(\]|\})+$/g, '').split(',')
        // _tmp = _tmp.map((x) => x.split(/(?<=^[^:]+?):/).map((y) => y.trim())) <- is Chrome only
        _tmp = _tmp.map((fragmentX) => {
            let _matches = fragmentX.match(/^[^:]*:/),
                _retarr  = _matches ? [ _matches[0].replace(':', ''), fragmentX.replace(_matches[0], '') ] : [ fragmentX ]
            return _retarr
        }).map((fragmentY) => fragmentY || fragmentY.trim())
        _tmp = _tmp.reduce((obj, x, i) => {
            if ( x[0] && x[1] ) {
                let prop  = x[0].trim().replace(/^('|")+|("|')+$/g, ''),
                    value = x[1].trim().replace(/^('|")+|("|')+$/g, '')
                if ( /^callback$/i.test( prop ) ) {
                    obj[prop] = Function.call(this, `return ${value}`)()
                } else {
                    obj[prop] = value
                }
            } else
            if ( x.length == 1 && x[0] ) {
                let value = x[0].trim().replace(/^('|")+|("|')+$/g, '')
                obj[i] = value
            } else {
                obj = null
            }
            return obj
        }, {})
        newObj = _tmp ? Object.assign(newObj, _tmp) : newObj
    }
    return newObj
}

function triggerEvent( element, event ) {
    if ( document.createEvent ) {
        let evt = document.createEvent( 'HTMLEvents' )
        evt.initEvent( event, true, true )
        return element.dispatchEvent( evt )
    } else {
        let evt = document.createEventObject()
        return element.fireEvent( `on${event}`, evt )
    }
}

function countElements( selector ) {
    return document.querySelectorAll( selector ).length
}

function getLastItemId( selector ) {
    let NumericIds = []
    if ( document.querySelectorAll( selector ).length == 0 ) {
        return 0
    }
    Array.prototype.forEach.call( document.querySelectorAll( selector ), (elm) => {
        let parseId = elm.id.split( /-|_|\/|,/ )
        NumericIds.push( parseInt( parseId[parseId.length - 1], 10 ) )
    } )
    return Math.max( ...NumericIds )
}

function renderLoader( id=null, color='#ccc', width=100, height=100, dots=4 ) {
    let ns = 'http://www.w3.org/2000/svg',
        svgElm = document.createElementNS(ns, 'svg'),
        container = document.createElement('div'),
        diameter = 6,
        gap = (width - dots * diameter) / (dots + 1)

    svgElm.setAttributeNS(null, 'version', '1.1')
    svgElm.setAttribute('xmlns', ns)
    svgElm.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    svgElm.setAttributeNS(null, 'x', '0px')
    svgElm.setAttributeNS(null, 'y', '0px')
    svgElm.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`)
    svgElm.setAttributeNS(null, 'enable-background', 'new 0 0 0 0')
    svgElm.setAttribute('xml:space', 'preserve')
    for ( let i = 1; i <= dots; i++ ) {
        let circle  = document.createElementNS(ns, 'circle'),
            animate = document.createElementNS(ns, 'animate'),
            mx = gap * i + (6 * (i - 1))
        circle.setAttributeNS(null, 'fill', color)
        circle.setAttributeNS(null, 'stroke', 'none')
        circle.setAttributeNS(null, 'cx', mx)
        circle.setAttributeNS(null, 'cy', (height - diameter) / 2)
        circle.setAttributeNS(null, 'r', diameter)
        animate.setAttributeNS(null, 'attributeName', 'opacity')
        animate.setAttributeNS(null, 'dur', '1s')
        animate.setAttributeNS(null, 'values', '0;1;0')
        animate.setAttributeNS(null, 'repeatCount', 'indefinite')
        animate.setAttributeNS(null, 'begin', 0.1 + (0.1 * i))
        circle.appendChild(animate)
        svgElm.appendChild(circle)
    }
    container.appendChild(svgElm)
    container.classList.add('loader-container')
    if ( id ) {
        container.setAttribute( 'id', id )
    }
    return container
}

function createNotice( message, before=null, after=null ) {
    let wrapper = document.createElement('div'),
        paragraph = document.createElement('p')

    if ( before ) {
        wrapper.appendChild( before )
    }
    paragraph.classList.add( 'notice-message' )
    paragraph.textContent = message
    paragraph.style.textAlign = 'center'
    wrapper.appendChild( paragraph )
    if ( after ) {
        wrapper.appendChild( after )
    }
    return wrapper
}

function modifyNotice( message ) {
    let targetElm = document.querySelector('.notice-message')

    if ( targetElm ) {
        targetElm.textContent = message
    }
}


export { sleep, isObject, isElement, extend, hasProp, logger, parseObject, triggerEvent, countElements, getLastItemId, renderLoader, createNotice, modifyNotice }
