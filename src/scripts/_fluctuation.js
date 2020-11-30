import { sleep, isElement } from './_utils'
import { callback } from './_callback'

/**
 * Add handler of the fluctuation field
 * @param {}
 * @return {}
 */
function initFluctuation() {
    Array.prototype.forEach.call(document.querySelectorAll('.fluctuation'), (elm) => {
        elm.addEventListener('click', (evt) => {
            let self = evt.target,
                fromId   = self.dataset.fromId,
                pickElm  = document.getElementById(fromId),// self.previousElementSibling
                getValue = isElement( pickElm ) ? pickElm.value : null,
                pattern  = isElement( pickElm ) ? pickElm.getAttribute('pattern') || null : null,
                insertTo = self.dataset.insertTo,//self.getAttribute('data-insert-to'),
                insertOpts = {
                    id: self.dataset.insertId,//self.getAttribute('data-insert-id'),
                    name: self.dataset.insertName,// self.getAttribute('data-insert-name'),
                    classes: self.dataset.insertClasses,// self.getAttribute('data-insert-classes'),
                    callback: self.dataset.callback,// self.getAttribute('data-callback'),
                }

            if ( getValue ) {
                if ( pattern ) {
                    let regex = RegExp(pattern)

                    if ( ! regex.test(getValue) ) {
                        _formatError( pickElm )
                        return false
                    }
                }
                pickElm.setAttribute('value', '')
                pickElm.value = ''
                _increaseItem( insertTo, getValue, insertOpts )
            }
        }, false)
    })
    Array.prototype.forEach.call(document.querySelectorAll('[id^="remove-fluctuation-"]'), (elm) => {
        elm.addEventListener('click', (evt) => {
            _decreaseItem( evt.target )
        }, false)
    })
}

/**
 * Increase item
 * @private
 * @param {string} elementId
 * @param {string} value
 * @param {object} options
 */
function _increaseItem( elementId, value, options ) {
    let listElm = document.getElementById(elementId)
    if ( listElm ) {
        let listContainer = document.createElement([ 'UL', 'OL', 'DL' ].includes(listElm.nodeName) ? 'li' : 'div'),
            input  = document.createElement('input'),
            button = document.createElement('button'),
            atName = /%d/.test(options.name) ? options.name.replace('%d', listElm.children.length + 1) : options.name

        input.type = 'text'
        input.id   = `${options.id}-${listElm.children.length + 1}`
        input.name = atName
        input.setAttribute('value', value)
        input.classList.add( ...options.classes.split(' ') )
        input.setAttribute('readonly', true)
        button.type = 'button'
        button.id   = `remove-fluctuation-${options.id}-${listElm.children.length + 1}`
        button.classList.add( 'button', 'button-secondary' )
        button.setAttribute('aria-label', 'Remove Item')
        button.setAttribute('data-callback', options.callback)
        button.innerHTML = '<i class="mdi mdi-close-thick"></i>'
        button.addEventListener('click', (evt) => {
            _decreaseItem( evt.target )
        }, false)
        listContainer.appendChild( input )
        listContainer.appendChild( button )
        listElm.appendChild( listContainer )

        callback[options.callback]()
    }
}

/**
 * Decrease item
 * @private
 * @param {object} self  A clicked button element
 */
function _decreaseItem( self ) {
    let removeElm = self.parentNode

    removeElm.style.opacity = 0
    sleep(200).then(() => {
        removeElm.parentNode.removeChild(removeElm)
        callback[self.dataset.callback]()
    })
}

/**
 * Output error
 * @private
 * @param {object} field  An input field with error
 */
function _formatError( field ) {
    let parentElm = field.parentNode,
        alertElm  = document.createElement('span')

    field.style.borderColor = '#bb2124'
    field.addEventListener('focus', (evt) => {
        evt.target.removeAttribute('style')
    }, false)
    if ( ! parentElm.querySelector('.short-lived') ) {
        alertElm.classList.add('surfix', 'text-alert', 'short-lived')
        alertElm.textContent = 'Incorrect format of inputted'
        parentElm.appendChild(alertElm)
        sleep(1200).then(() => {
            alertElm.style.opacity = 0
            sleep(200).then(() => {
                parentElm.removeChild(alertElm)
            })
        })
    }
}


export { initFluctuation }