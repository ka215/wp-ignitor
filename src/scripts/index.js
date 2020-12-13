/**
 * WP-Ignitor plugin
 * @since 1.0.0
 */
//import '../styles/index.scss'
import { hasProp, logger, triggerEvent } from './_utils'
import { postData, addPostField } from './_postData'
import { callback } from './_callback'
import { initDialog, showDialog } from './_dialog'
import { initFluctuation } from './_fluctuation'

function init() {
    const AJAX_URL  = window.ajaxurl || null,
          parsedURL = new URL(window.location.href)

    window.callback = callback

    initDialog()
    initFluctuation()

    // Focus current help tab
    if ( document.getElementById('contextual-help-wrap') ) {
        Array.prototype.forEach.call(document.querySelectorAll('#contextual-help-columns ul li'), (elm) => {
            let tabLinkName = elm.id.split('-')[2],
                currentTab  = new URLSearchParams(parsedURL.searchParams).get('tab')

            if ( tabLinkName === currentTab ) {
                triggerEvent( elm.querySelector('a'), 'click' )
            }
        })
    }

    // Update "wp-config.php" section
    Array.prototype.forEach.call(document.querySelectorAll('.toggle-option'), (elm) => {
        elm.addEventListener('change', () => {
            modifyConfigPreview()
        }, false)
    })
    Array.prototype.forEach.call(document.querySelectorAll('input[name^="wp_config["]'), (elm) => {
        elm.addEventListener('change', (evt) => {
            if ( document.getElementById(`chk-${evt.target.id}`).checked ) {
                modifyConfigPreview()
            }
        }, false)
    })
    modifyConfigPreview()

    // Update ".htaccess" section
    Array.prototype.forEach.call(document.querySelectorAll('input[id^="advanced-option-"]'), (elm) => {
        elm.addEventListener('change', () => {
            triggerEvent( document.getElementById('btn-reload-preview-htaccess'), 'click' )
        }, false)
    })

    // Bind the Follow Color
    Array.prototype.forEach.call(document.querySelectorAll('[data-follow-color]'), (elm) => {
        let input  = elm.querySelector('input'),
            followColor = ( elm ) => {
                let color    = elm.dataset.followColor,
                    classes  = elm.classList,
                    active   = elm.querySelector('input') && elm.querySelector('input').checked ? true : false

                if ( 'inherit' === color ) {
                    if ( active && ! classes.contains('txt-prim') ) {
                        classes.add('txt-prim')
                    } else {
                        classes.remove('txt-prim')
                    }
                } else
                if ( '' !== color ) {
                    if ( active && elm.style.color !== color ) {
                        elm.style.color = color
                    } else {
                        elm.style.color = 'unset'
                    }
                }
            }// end: followColor()

        if ( input == undefined ) {
            return
        }
        input.addEventListener('change', (evt) => {
            followColor(evt.target.closest('label'))
        }, false)

        followColor(elm)
    })

    if ( document.getElementById('target-page-path') ) {
        // Update frontend HTML section
        document.getElementById('target-page-path').addEventListener('keydown', (evt) => {
            let _key = window.event ? window.event.keyCode : evt.which

            if ( _key == 13 ) {
                evt.preventDefault()
                triggerEvent( document.getElementById('btn-commit-to-cleanup'), 'click' )
            }
        }, false)
        document.getElementById('target-page-path').addEventListener('change', () => {
            triggerEvent( document.getElementById('btn-commit-to-cleanup'), 'click' )
        }, false)
    }

    if ( document.getElementById('rest-namespaces') ) {
        // Handle when changed Rest API Namespace behavior
        Array.prototype.forEach.call(document.querySelectorAll('[name^="namespaces["]'), (elm) => {
            elm.addEventListener('change', (evt) => {
                let slug_ns = evt.target.id.replace('rest-namespace-', ''),
                    pair_field = document.getElementById(`http-code-${slug_ns}`)
                if ( 'allow_all' === evt.target.value ) {
                    pair_field.value = '200'
                    pair_field.setAttribute('disabled', true)
                } else {
                    pair_field.removeAttribute('disabled')
                    pair_field.value = '404'
                }
            }, false)
        })
    }

    // Auto-focus to specified hash of self URL
    if ( parsedURL.hash !== '' ) {
        let targetElm = document.getElementById(parsedURL.hash.replace('#', ''))

        if (targetElm) {
            targetElm.classList.add('focus', 'focus-active')
            targetElm.addEventListener('mouseout', (evt) => {
                evt.target.classList.remove('focus-active')
            }, false)
            setTimeout(() => { targetElm.classList.remove('focus-active') }, 5000)
        }
    }

    // Event handler for each button clicked
    Array.prototype.forEach.call(document.querySelectorAll('[id^="btn-"]'), (elm) => {
        elm.addEventListener('click', (evt) => {
            let self = evt.target,
                form = document.getElementById('wpignitor-form'),
                fd   = new FormData( form ),
                data = {}

            for ( let [_p, _v] of fd.entries() ) {
                if ( _v ) {
                    if ( self.id !== 'btn-update-htaccess' && _p === 'htaccess' ) {
                        continue
                    } else {
                        data[_p] = _v
                    }
                }
            }
            switch( self.id ) {
                // Globals Tab
                case 'btn-move-install-path': {
                    const err = new Error()
                    let dialogButtonText = 'Close'

                    data.method = 'move-install-path'
                    postData( AJAX_URL, data ).then((response) => {
                        //console.log( response )
                        if ( hasProp( 'button_text', response ) ) {
                            dialogButtonText = response.button_text
                        }
                        if ( response.result ) {
                            let onClick = function() {
                                //console.log( 'Clicked Re-login', location.hostname )
                                for( let cookie_name of response.auth_cookies ) {
                                    document.cookie = `${cookie_name}=;domain=${location.hostname};max-age=0`
                                }
                                window.location.href = response.redirect_to
                            }
                            modifyDialogBody( 'move-install-path', response.message, [ 'text-success' ], response.button_text, [ 'button-primary' ], onClick )
                        } else {
                            err.message = response.message
                            throw err
                        }
                    }).catch((error) => {
                        logger(error)
                        modifyDialogBody( 'move-install-path', `${error.name}: ${error.message}`, [ 'text-alert' ], dialogButtonText, [ 'button-secondary' ] )
                    })
                    break
                }
                case 'btn-move-wp-config':
                    data.method = 'move-wp-config'
                    postData( AJAX_URL, data ).then((response) => {
                        let addClasses = response.result ? [ 'text-success' ] : [ 'text-alert' ]
                        modifyDialogBody( 'move-wp-config', response.message, addClasses )
                    }).catch((error) => {
                        logger(error)
                    })
                    break
                case 'btn-update-wp-config':
                    document.getElementById('htaccess').setAttribute('disabled', true)
                    document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''))
                    Array.prototype.forEach.call(document.querySelectorAll('input[name^="wp_config["]'), (elm) => {
                        if ( document.getElementById(`chk-${elm.id}`).checked ) {
                            let _val = null
                            if ( elm.type === 'checkbox' ) {
                                _val = elm.checked
                            } else {
                                _val = elm.getAttribute('value')
                            }
                            form.appendChild(addPostField( elm.getAttribute('name'), _val ))
                        }
                        elm.setAttribute('disabled', true)
                    })
                    form.submit()
                    break
                case 'btn-restore-wp-config':
                    document.getElementById('preview-wp-config').setAttribute('disabled', true)
                    document.getElementById('htaccess').setAttribute('disabled', true)
                    document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''))
                    form.submit()
                    break
                case 'btn-reload-preview-htaccess':
                    data.method = 'reload-preview-htaccess'
                    for ( let _k in data ) {
                        if ( Object.hasOwnProperty.call(data, _k) ) {
                            if ( /^(add_config_fulltext|optimize_htaccess|without_subdir|wp_config\[.*\])$/.test(_k) ) {
                                delete data[_k]
                            }
                        }
                    }
                    postData( AJAX_URL, data ).then((response) => {
                        if (response.result) {
                            document.getElementById('htaccess').textContent = response.htaccess
                        }
                    }).catch((error) => {
                        logger(error)
                    })
                    break
                case 'btn-update-htaccess':
                    document.getElementById('preview-wp-config').setAttribute('disabled', true)
                    document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''))
                    form.submit()
                    break
                case 'btn-restore-htaccess':
                case 'btn-clear-all-settings':
                    document.getElementById('preview-wp-config').setAttribute('disabled', true)
                    document.getElementById('htaccess').setAttribute('disabled', true)
                    document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''))
                    form.submit()
                    break
                // Conceals Tab
                case 'btn-commit-to-cleanup':
                    data.method = 'cleanup-html'
                    Array.prototype.forEach.call(document.querySelectorAll('[name^="cleanup["]'), (elm) => {
                        data[elm.getAttribute('name')] = elm.checked
                    })
                    postData( AJAX_URL, data ).then((response) => {
                        if (response.result) {
                            document.getElementById('html').innerHTML = response.html
                        }
                    }).catch((error) => {
                        logger(error)
                    })
                    break
                case 'btn-save-rest-behavior':
                    document.querySelector('input[name=method]').setAttribute('value', 'rest-behavior')
                    form.submit()
                    break
                // Authorizations Tab
                case 'btn-commit-login-settings':
                    if ( parseInt( data.new_login_on ) == 1 ) {
                        if ( ! data.new_login_path ) {
                            let errField = document.getElementById('new-login-path'),
                                dialogOpts = {
                                    title: `<label class="fw600 text-alert myh">${errField.dataset.errorTitle}</label>`,
                                    content: `<div class="text-alert align-center">${errField.dataset.blankError}</div>`,
                                    reinit: false,
                                    size: 'medium',
                                }

                            errField.style.borderColor = '#bb2124'
                            errField.addEventListener('focus', (evt) => {
                                evt.target.removeAttribute('style')
                            }, false)
                            showDialog( dialogOpts )
                            evt.preventDefault()
                            return false
                        }
                    }
                    document.querySelector('input[name=method]').setAttribute('value', 'login-setting')
                    form.submit()
                    break
                // Helth Check Tab
                case 'btn-unlock-core-updater':
                    document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''))
                    form.submit()
                    break
                default:
                    return false
            }
        }, false)
    })

}

function modifyDialogBody( targetId, message = '', addClasses = [], buttonText = null, btnClasses = [ 'button-secondary' ], onClick = null ) {
    let dialogBody = document.getElementById(targetId).closest('.dialog-body'),
        wrapper    = document.createElement('div'),
        paragraph  = document.createElement('p'),
        container  = document.createElement('div'),
        button     = document.createElement('button')
    paragraph.classList.add( 'mxa', 'align-center' )
    if ( addClasses.length > 0 ) {
        paragraph.classList.add( ...addClasses )
    }
    paragraph.innerHTML = message
    wrapper.appendChild(paragraph)
    if ( buttonText ) {
        button.setAttribute( 'type', 'button' )
        button.classList.add( 'button', 'mxa' )
        if ( btnClasses.length > 0 ) {
            button.classList.add( ...btnClasses )
        }
        button.textContent = buttonText
//console.log( onClick, typeof onClick )
        if ( onClick && typeof onClick === 'function' ) {
            button.addEventListener('click', onClick, false)
        } else {
            button.addEventListener('click', () => {
                document.querySelector('.wpignitor-dialog').classList.remove('show')
            }, false)
        }
        container.classList.add( 'mt1', 'align-center' )
        container.appendChild( button )
        wrapper.appendChild(container)
    }
    dialogBody.innerHTML = ''
    dialogBody.appendChild(wrapper)
}

function modifyConfigPreview() {
    let preview  = document.getElementById('preview-wp-config'),
        confLine = [ '# BEGIN WP Ignitor' ]

    if ( ! preview ) {
        return
    }
    Array.prototype.forEach.call(document.querySelectorAll('.toggle-option'), (elm) => {
        if ( elm.checked ) {
            let targetId   = elm.id.replace('chk-', ''),
                fieldElm   = document.getElementById(targetId),
                constName  = targetId.toUpperCase(),
                constValue = null

            if ( fieldElm.type === 'checkbox' ) {
                constValue = fieldElm.checked ? 'true' : 'false'
            } else
            if ( fieldElm.type === 'number' ) {
                constValue = [ 'wp_memory_limit', 'wp_max_memory_limit' ].includes( targetId ) ? `'${fieldElm.value}M'` : parseInt( fieldElm.value, 10 )
            } else {
                constValue = `'${fieldElm.value}'`
                if ( fieldElm.dataset.pair ) {
                    constValue = constValue.replace(/\\/g, '/').replace(/\/$/, '')
                }
            }

            confLine.push( `defined( '${constName}' ) or define( '${constName}', ${constValue} );` )
            if ( fieldElm.dataset.pair ) {
                let pairValue = constValue.replace( fieldElm.dataset.docroot, `${location.origin}` )

                confLine.push( `defined( '${fieldElm.dataset.pair}' ) or define( '${fieldElm.dataset.pair}', ${pairValue} );` )
            }
        }
    })
    confLine.push( '# END WP Ignitor' )
    preview.textContent = ''
    preview.textContent = confLine.join( "\n" )
    preview.setAttribute('rows', Math.max(confLine.length, 3))
}


// Dispatcher
if ( document.readyState === 'complete' || ( document.readyState !== 'loading' && ! document.documentElement.doScroll ) ) {
    init()
} else
if ( document.addEventListener ) {
    document.addEventListener( 'DOMContentLoaded', init, false )
} else {
    window.onload = init
}
