/**
 * Plugin to bind toggleable password field
 * @param {}
 * @return {}
 */
function initToggleField() {
    let passiveSupported = false
    
    try {
        const options = {
            get passive() {
                passiveSupported = true
                return false
            }
        }
        window.addEventListener('test', null, options)
        window.removeEventListener('test', null, options)
    } catch(err) {
        passiveSupported = false
    }
    
    Array.prototype.forEach.call(document.querySelectorAll('.field-toggle'), (elm) => {
        let options = passiveSupported ? { passive: true } : false
        elm.removeEventListener('click', _handleToggleField, options)
        elm.addEventListener('click', _handleToggleField, options)
        _behaviorToggleField(elm)
    })
}

function _handleToggleField(evt) {
    evt.target.classList.toggle('show')
    _behaviorToggleField(evt.target)
}

function _behaviorToggleField(element) {
    let input = element.previousElementSibling

    if (element.classList.contains('show')) {
        element.classList.remove(element.getAttribute('data-on'))
        element.classList.add(element.getAttribute('data-off'))
        input.setAttribute('type', 'text')
    } else {
        element.classList.remove(element.getAttribute('data-off'))
        element.classList.add(element.getAttribute('data-on'))
        input.setAttribute('type', 'password')
    }
}

export { initToggleField }