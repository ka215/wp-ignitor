/**
 * WP-Ignitor plugin
 * @since 1.0.0
 */
//import '../styles/index.scss'
//import { sleep, renderLoader } from './_utils'
import { postData } from './_postData'
import { callback } from './_callback'
import { initDialog } from './_dialog'

function init() {
    const AJAX_URL = window.ajaxurl || null,
          NOW_PAGE = window.pagenow || null
    
    window.callback = callback
    
    initDialog()
    
    console.log( AJAX_URL, NOW_PAGE, window.callback )
    
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
                case 'btn-move-install-path':
                    data.method = 'move-install-path'
                    postData( AJAX_URL, data ).then((data) => {
                        let dialogBody = document.getElementById('move-install-path').closest('.dialog-body'),
                            wrapper    = document.createElement('div'),
                            paragraph  = document.createElement('p'),
                            container  = document.createElement('div'),
                            button     = document.createElement('button')
                        paragraph.classList.add( 'mxa', 'align-center' )
                        paragraph.classList.add( data.result ? 'text-success' : 'text-alert' )
                        paragraph.textContent = data.message
                        button.setAttribute( 'type', 'button' )
                        button.classList.add( 'button', 'mxa', data.result ? 'button-primary' : 'button-secondary' )
                        button.textContent = data.button_text
                        button.addEventListener('click', () => {
                            if ( data.result ) {
                                window.location.href = data.redirect_to
                            } else {
                                document.querySelector('.wpignitor-dialog').classList.remove('show')
                            }
                        }, false)
                        container.classList.add( 'mt1', 'align-center' )
                        container.appendChild( button )
                        wrapper.appendChild(paragraph)
                        wrapper.appendChild(container)
                        dialogBody.innerHTML = ''
                        dialogBody.appendChild(wrapper)
                        console.log( data )
                    })
                    break
                case 'btn-move-wp-config':
                    data.method = 'move-wp-config'
                    postData( AJAX_URL, data ).then((data) => {
                        let dialogBody = document.getElementById('move-wp-config').closest('.dialog-body'),
                            wrapper    = document.createElement('div'),
                            paragraph  = document.createElement('p')
                        paragraph.classList.add( 'mxa', 'align-center' )
                        paragraph.classList.add( data.result ? 'text-success' : 'text-alert' )
                        paragraph.textContent = data.message
                        wrapper.appendChild(paragraph)
                        dialogBody.innerHTML = ''
                        dialogBody.appendChild(wrapper)
                    })
                    break
                case 'btn-update-wp-config':
                case 'btn-update-htaccess':
                    document.querySelector('input[name=method]').setAttribute('value', self.id.replace('btn-', ''))
                    form.submit()
                    break
                // Conceal Tab
                //case '':
                // Authorization Tab
                //case '':
                // Helth Check Tab
                //case '':
                default:
                    return false
            }
        }, false)
    })

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
