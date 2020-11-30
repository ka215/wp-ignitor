import { renderLoader, createNotice, triggerEvent } from './_utils'
//import { postData } from './_postData'

const callback = {
    moveInstallPath: () => {
        let message = 'Currently being processed, please wait.',
            loader  = renderLoader( 'move-install-path', '#c0c0c0', 120, 60, 5 )
        return createNotice( message, loader )
    },
    moveWpConfig: () => {
        let message = 'Currently being processed, please wait.',
            loader  = renderLoader( 'move-wp-config', '#c0c0c0', 120, 60, 5 )
        return createNotice( message, null, loader )
    },
    selfRedirect: () => {
        
    },
    selfReload: () => {
        window.location.reload(true)
    },
    disableButton: () => {
        document.querySelector('.wpignitor-dialog .dialog-footer button').disabled = true
    },
    reloadPreviewHtaccess: () => {
        triggerEvent(document.getElementById('btn-reload-preview-htaccess'), 'click')
    },

}

export { callback }