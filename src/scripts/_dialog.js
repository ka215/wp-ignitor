import { parseObject, isElement } from './_utils'

/**
 * Add handler of the dialog
 * @param {}
 * @return {}
 */
function initDialog() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-bind=dialog]'), (elm) => {
        elm.addEventListener('click', (evt) => {
            let self = evt.target,
                opts = {
                    title: self.dataset.title || null,
                    content: self.dataset.content || null,
                    foot: self.dataset.foot || null,
                    button: self.dataset.button || null,
                    effect: self.dataset.effect || 1,
                    size: self.dataset.dialogSize || null,
                    reinit: self.dataset.reinit || false,
                    persistent: self.dataset.persistent || false,
                    shown: self.dataset.shown || null,
                    hidden: self.dataset.hidden || null,
                    beforeShow: self.dataset.beforeShow || null,
                    beforeHide: self.dataset.beforeHide || null,
                }

            if ( opts.content && Object.prototype.hasOwnProperty.call(window.callback, opts.content) ) {
                opts.content = typeof window.callback[opts.content] === 'function' ? window.callback[opts.content]() : window.callback[opts.content]
            }
            showDialog( opts )
        }, false)
    })
}

/*
 * Fix the position of backdrop under the overlay filter
 * @public
 * @param {boolean} isFixed
 * @param {?function} callback
 */
function fixedBackdrop( isFixed, callback = null ) {
    let isIOS = /iP(hone|(o|a)d)/.test( navigator.userAgent )
    Array.prototype.forEach.call(document.querySelectorAll('[data-fixed-backdrop]'), (elm) => {
        let nowY       = window.pageYOffset,
            nowX       = window.pageXOffset,
            targetRect = elm.getBoundingClientRect(),
            targetX    = targetRect.left + nowX,
            targetY    = targetRect.top + nowY,
            enabled    = /^(true|1)$/i.test( elm.dataset.fixedBackdrop ),
            targetStyle = window.getComputedStyle( elm ),
            marginTop  = parseInt( targetStyle.getPropertyValue('margin-top'), 10 ),
            marginLeft = parseInt( targetStyle.getPropertyValue('margin-left'), 10 )
        
        if ( ! enabled || isIOS ) {
            return
        }
        if ( isFixed ) {
            elm.classList.add('fixed-backdrop')
            elm.style.top  = `${targetY - marginTop}px`//`${-1 * nowY}px`
            elm.style.left = `${targetX - marginLeft}px`//`${-1 * nowX}px`
        } else {
            elm.classList.remove('fixed-backdrop')
            elm.removeAttribute('style')
            window.scrollTo(-1 * targetX, -1 * targetY)
        }
        if ( callback && typeof callback === 'function' ) {
            //console.log('fixedBackdrop:callback - after Dialog:beforeHide and before Dialog:hidden')
            callback()
        }
    })
}

/*
 * Create new element of dialog for any notifications
 * @public
 * @param {object} options
 */
function generateDialog( options ) {
    return new Promise((resolve) => {
        let dialogs = document.getElementsByClassName('wpignitor-dialog'),
            backdrops = document.getElementsByClassName('dialog-backdrop')

        if ( dialogs.length > 0 ) {
            Array.prototype.forEach.call(dialogs, (dialog) => {
                dialog.remove()
            })
        }
        if ( backdrops.length > 0 ) {
            Array.prototype.forEach.call(backdrops, (backdrop) => {
                backdrop.remove()
            })
        }

        let dialog     = document.createElement('div'),
            container  = document.createElement('div'),
            backdrop   = document.createElement('div'),
            viewWidth  = window.innerWidth,
            insertTitle = () => {
                let title = options.title ? options.title.toString() : null
                if ( title ) {
                    let dialogHeader = document.createElement('h3')

                    dialogHeader.classList.add('dialog-header')
                    dialogHeader.innerHTML = title
                    container.append(dialogHeader)
                }
            },
            insertContent = () => {
                let content = options.content ? (typeof options.content === 'string' && /^\{+.*\}$/.test(options.content) ? parseObject(options.content) : options.content) : null
                if ( content ) {
                    let dialogBody = document.createElement('div')

                    dialogBody.classList.add('dialog-body')
                    if ( typeof content === 'string' ) {
                        dialogBody.innerHTML = content.replace(/\\(.)/mg, "$1")
                    } else
                    if ( typeof content === 'object' ) {
                        if ( isElement( content ) ) {
                            dialogBody.append(content)
                        } else
                        if ( Object.keys(content).length != 0 ) {
                            if ( content.remote && content.url ) {
                                if ( content.loader ) {
                                    dialogBody.innerHTML = content.loader.replace(/\\(.)/mg, "$1")
                                } else {
                                    dialogBody.innerHTML = '<div style="text-align:center;color:#ddd;">Now Loading...</div>'
                                }
                                fetch(content.url, {
                                    method: content.remote,
                                    mode: content.mode || 'cors',
                                    headers: {
                                        'X-Requested-With': 'XMLHttpRequest'
                                    }
                                }).then((res) => res.json())
                                .then((response) => {
                                    //console.log('Success:', JSON.stringify(response))
                                    dialogBody.innerHTML = response.content
                                })
                                .catch((error) => {
                                    console.error('Error:', error)
                                })
                            } else
                            if ( content[0] ) {
                                dialogBody.innerHTML = content[0]
                            } else {
                                // dialogBody.textContent = JSON.stringify(content)
                                dialogBody.innerHTML = Object.values(content).join('')
                            }
                        }
                    } else {
                        dialogBody.textContent = content
                    }
                    container.append(dialogBody)
                }
            },
            insertFoot = () => {
                let foot = options.foot ? (typeof options.foot === 'string' && /^\{+.*\}$/.test(options.foot) ? parseObject(options.foot) : options.foot) : true,
                    dialogFooter = document.createElement('div'),
                    dialogButton = document.createElement('button'),
                    dialogCallback = function(){ return true },
                    buttonClass = options.button || 'button button-secondary',//document.body.dataset.dialogButton || undefined,
                    noRender  = false,
                    isOutside = false

                if ( foot ) {
                    dialogFooter.classList.add('dialog-footer')
                    dialogButton.setAttribute('type', 'button')
                    if ( buttonClass ) {
                        dialogButton.classList.add(...buttonClass.split(' '))
                    }
                    if ( typeof foot === 'string' ) {
                        switch ( true ) {
                            case /^none$/i.test( foot ):
                                noRender = true
                                break
                            case /^dismiss-outside$/i.test( foot ):
                                isOutside = true
                                dialogButton.classList.add(foot)
                                dialogButton.innerHTML = '<span title="Close"></span>'
                                break
                            default:
                                dialogButton.innerHTML = foot.replace(/\\(.)/mg, "$1")
                                break
                        }
                    } else
                    if ( typeof foot === 'object' ) {
                        if ( isElement( foot ) ) {
                            dialogButton = foot
                        } else
                        if ( Object.keys(foot).length != 0 ) {
                            if ( Object.prototype.hasOwnProperty.call(foot, 'class') ) {
                                dialogButton.removeAttribute('class')
                                dialogButton.classList.add( ...foot.class.split(' ') )
                            }
                            if ( Object.prototype.hasOwnProperty.call(foot, 'label') ) {
                                dialogButton.innerHTML = foot.label.replace(/\\(.)/mg, "$1")
                            }
                            if ( Object.prototype.hasOwnProperty.call(foot, 'callback') ) {
                                dialogCallback = foot.callback
                            }
                            if ( Object.prototype.hasOwnProperty.call(foot, '0') ) {
                                switch ( true ) {
                                    case /^none$/i.test( foot[0] ):
                                        noRender = true
                                        break
                                    case /^dismiss-outside$/i.test( foot[0] ):
                                        isOutside = true
                                        dialogButton.classList.add(foot[0])
                                        dialogButton.innerHTML = '<span title="Close"></span>'
                                        break
                                    default:
                                        dialogButton.innerHTML = foot[0].replace(/\\(.)/mg, "$1")
                                        break
                                }
                            }
                        }
                    } else {
                        dialogButton.textContent = 'Close'
                    }
                    if ( ! noRender ) {
                        dialogButton.addEventListener('click', () => {
                            dialogCallback()
                            fixedBackdrop(false, () => {
                                dialog.classList.remove('show')
                            })
                        }, false)
                        if ( ! isOutside ) {
                            dialogFooter.append(dialogButton)
                            container.append(dialogFooter)
                        } else {
                            container.append(dialogButton)
                        }
                    }
                }
            },
            callback  = (mutationsList, observer) => {
                mutationsList.forEach((mutation) => {
                    switch(mutation.type) {
                        case 'childList':
                            Array.prototype.forEach.call(mutation.addedNodes, (elm) => {
                                if ( elm.classList.contains('dialog-content') ) {
                                    insertTitle()
                                    insertContent()
                                    insertFoot()
                                    resolve(dialog)
                                }
                            })
                            break
                        case 'attributes':
                            if ( mutation.oldValue && mutation.target.classList.contains('show') ) {
                                // Dialog:shown
                                if ( options.shown && Object.prototype.hasOwnProperty.call(window.callback, options.shown) ) {
                                    if ( typeof window.callback[options.shown] === 'function' ) window.callback[options.shown]()
                                }
                            } else
                            if ( mutation.oldValue ) {
                                // Dialog:hidden
                                if ( options.hidden && Object.prototype.hasOwnProperty.call(window.callback, options.hidden) ) {
                                    if ( typeof window.callback[options.hidden] === 'function' ) window.callback[options.hidden]()
                                }
                                observer.disconnect()
                            } else {
                                // Dialog:beforeShow
                                if ( options.beforeShow && Object.prototype.hasOwnProperty.call(window.callback, options.beforeShow) ) {
                                    if ( typeof window.callback[options.beforeShow] === 'function' ) window.callback[options.beforeShow]()
                                }
                            }
                            break
                    }
                })
            },
            observer = new MutationObserver(callback)

        // Set class of dialog transition effect
        let effect
        switch(true) {
            case /^(2|slide-?in-right)$/i.test( options.effect ):
                effect = 'effect-2'
                break
            case /^(3|slide-?in-bottom)$/i.test( options.effect ):
                effect = 'effect-3'
                break
            case /^(4|sticky-?up)$/i.test( options.effect ):
                effect = 'effect-4'
                break
            case /^(5|full-?wide)$/i.test( options.effect ):
                effect = 'effect-5'
                break
            default:
                effect = 'effect-1'
                break
        }

        // Set class of dialog size
        let size
        switch(true) {
            case /^(xl|xlarge)$/i.test( options.size ):
                size = 'size-xl'
                break
            case /^(lg|large)$/i.test( options.size ):
                size = 'size-lg'
                break
            case /^(md|medium)$/i.test( options.size ):
                size = 'size-md'
                break
            case /^(sm|small)$/i.test( options.size ):
                size = 'size-sm'
                break
            case /^auto$/i.test( options.size ):
            default:
                if ( viewWidth < 481 ) { // Small
                    size = 'size-xl'
                } else
                if ( viewWidth > 768 ) { // Large
                    size = ''
                } else { // Medium
                    size = 'size-lg'
                }
                break
        }

        observer.observe(dialog, { attributes: true, attributeOldValue: true, childList: true, subtree: true })
        //observer.observe(dialog, { childList: true, subtree: true })

        dialog.classList.add('wpignitor-dialog', effect)
        if ( size !== '' ) {
            dialog.classList.add(size)
        }
        container.classList.add('dialog-content')
        backdrop.classList.add('dialog-backdrop')
        dialog.append(container)
        document.body.append(dialog)
        document.body.append(backdrop)
        if ( ! options.persistent ) {
            backdrop.addEventListener('click', () => {
                if ( dialog.classList.contains('show') ) {
                    fixedBackdrop(false, () => {
                        // Dialog:beforeHide
                        if ( options.beforeHide && Object.prototype.hasOwnProperty.call(window.callback, options.beforeHide) ) {
                            if ( typeof window.callback[options.beforeHide] === 'function' ) window.callback[options.beforeHide]()
                        }
                        dialog.classList.remove('show')
                    })
                } else {
                    return false
                }
            }, false)
        }
    })
}

/*
 * Dynamically create dialog for notification and show
 * @public
 * @param {object} options
 */
async function putDialog( options ) {
    return await generateDialog( options )
}

window.dialogStackTimer = []
/*
 * Show dialog as wrapper of putDialog
 * @public
 * @param {object} options
 */
function showDialog( options ) {
    putDialog( options ).then((dialog) => setTimeout(() => {
            // Re-init this extension scripts
            if ( options.reinit == undefined || options.reinit === true ) {
                window.location.reload(true)
            }
            // Delay by transition animation interval
            dialog.classList.add('show')
            fixedBackdrop(true)
        }, 300)
    ).then((timerId) => {
        // Prevent the memory leak due to continue timer by setTimeout
        window.dialogStackTimer.push( timerId )
        let loop = window.dialogStackTimer.length - 1, i
        for( i = 0; i < loop; i++ ) {
            clearTimeout( window.dialogStackTimer.shift() )
        }
    })
}

export { initDialog, showDialog }