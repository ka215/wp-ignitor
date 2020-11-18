import { renderLoader } from './_utils'

function createNotify( message, before=null, after=null ) {
    let wrapper = document.createElement('div'),
        paragraph = document.createElement('p')

    if ( before ) {
        wrapper.appendChild( before )
    }
    paragraph.textContent = message
    paragraph.style.textAlign = 'center'
    wrapper.appendChild( paragraph )
    if ( after ) {
        wrapper.appendChild( after )
    }
    return wrapper
}

const callback = {
    moveInstallPath: () => {
        let message = 'Currently being processed, please wait.',
            loader  = renderLoader( 'move-install-path', '#c0c0c0', 120, 60, 5 )
        return createNotify( message, loader )
    },
    moveWpConfig: () => {
        let message = 'Currently being processed, please wait.',
            loader  = renderLoader( 'move-wp-config', '#c0c0c0', 120, 60, 5 )
        return createNotify( message, null, loader )
    },
    selfRedirect: () => {
        
    },
    selfReload: () => {
        window.location.reload(true)
    },
    disableButton: () => {
        document.querySelector('.wpignitor-dialog .dialog-footer button').disabled = true
    },

    test: () => {
        //console.log( ...arguments )
    },

}

export { callback }