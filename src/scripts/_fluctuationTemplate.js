import { sleep, isElement } from './_utils'
import { initToggleField } from './_toggleField'
import { callback } from './_callback'

/**
 * Add handler of the fluctuation field with template
 * @param {}
 * @return {}
 */
function initFluctuationTemplate() {
    Array.prototype.forEach.call(document.querySelectorAll('.fluctuation-template'), (elm) => {
        elm.addEventListener('click', (evt) => {
            let self      = evt.target,
                template  = document.getElementById(self.dataset.templateId).cloneNode(true),
                fromIds   = self.dataset.fromId.split(','),
                pickElms  = fromIds.map((id) => document.getElementById(id)),
                getValues = pickElms.map((node) => isElement( node ) ? node.value : null),
                patterns  = pickElms.map((node) => isElement( node ) ? (node.getAttribute('pattern') || null) : null),
                insertTo  = self.dataset.insertTo,
                insertIds = self.dataset.insertId.split(',')

            template.removeAttribute('id')
            template.removeAttribute('style')
            template.removeAttribute('hidden')
            if (getValues.every((val) => '' !== val)) {
                let check = getValues.every((value, i) => {
                    if (patterns[i]) {
                        let regex = RegExp(patterns[i])

                        if (! regex.test(value)) {
                            _formatTemplateError(pickElms[i])
                            return false
                        }
                    }
                    return true
                })
                if (check) {
                    let newIndex = _getLastItemIndex(insertTo) + 1,
                        listElm  = document.getElementById(insertTo)

                    insertIds.forEach((baseId, i) => {
                        let targetElm = template.querySelector(`[id^="${baseId}-"]`),
                            elmId     = targetElm.getAttribute('id'),
                            elmName   = targetElm.getAttribute('name')

                        targetElm.setAttribute('value', getValues[i])
                        targetElm.setAttribute('name', elmName.replace('%d', newIndex))
                        targetElm.setAttribute('id', elmId.replace('%d', newIndex))
                    })
                    template.querySelectorAll('[id$="%d"]').forEach((elm) => {
                        let elmId = elm.getAttribute('id')
                        elm.setAttribute('id', elmId.replace('%d', newIndex))
                    })
                    template.querySelector('button').addEventListener('click', _decreaseTemplateItem, false)
                    listElm.appendChild(template)
                    pickElms.forEach((elm) => {
                        elm.setAttribute('value', '')
                        elm.value = ''
                    })
                    initToggleField()
                    if (self.dataset.callback) {
                        callback[self.dataset.callback]()
                    }
                }
            }
        }, false)
    })
    Array.prototype.forEach.call(document.querySelectorAll('[id^="remove-fluctuation-"]'), (elm) => {
        elm.addEventListener('click', _decreaseTemplateItem, false)
    })
}

/**
 * Get last index number of list elements
 * @private
 * @param {string} elementId  A parent element id that has list in the children
 */
function _getLastItemIndex(elementId) {
    let listElm = document.getElementById(elementId),
        items   = listElm.children || []
    if (items.length > 0) {
        let lastChild = [...items].slice(-1)[0],
            itemIndex = lastChild.querySelector('input').getAttribute('name').replace(/^.*\[(.*)\]$/i, '$1')
        if ('%d' === itemIndex) {
            return -1
        } else {
            return parseInt(itemIndex, 10)
        }
    } else {
        return -1
    }
}

/**
 * Decrease item
 * @private
 * @param {object} event  A clicked button element
 */
function _decreaseTemplateItem(event) {
    let removeElm = event.target.parentNode,
        _callback = event.target.dataset.callback || ''

    removeElm.style.opacity = 0
    sleep(301).then(() => {
        if (isElement(removeElm.parentNode)) {
            removeElm.parentNode.removeChild(removeElm)
            if (_callback) {
                callback[_callback]()
            }
        }
    })
}

/**
 * Output error
 * @private
 * @param {object} field  An input field with error
 */
function _formatTemplateError( field ) {
    let parentElm = field.parentNode,
        alertElm  = document.createElement('span')

    field.style.borderColor = '#bb2124'
    field.addEventListener('focus', (evt) => {
        evt.target.removeAttribute('style')
    }, false)
    if ( ! parentElm.querySelector('.short-lived') ) {
        alertElm.classList.add('surfix', 'text-alert', 'short-lived')
        alertElm.textContent = field.dataset.invalidText || 'Incorrect format of inputted'
        parentElm.appendChild(alertElm)
        sleep(1200).then(() => {
            alertElm.style.opacity = 0
            sleep(200).then(() => {
                parentElm.removeChild(alertElm)
            })
        })
    }
}


export { initFluctuationTemplate }