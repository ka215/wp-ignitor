/**
 * Asynchronously post as a wrapper for the Fetch API
 * @param  {string} [url='']  - URL of the request destination
 * @param  {Object} [data={}] - The key-value type object of data to send
 * @return {Object} The response of fetch request is returned as a promise object
 */
async function postData( url = '', data = {} ) {
    let params = new URLSearchParams()
    params.append( 'action', 'wpignitor_ajax' )
    params.append( 'nonce', document.getElementById( '_wpnonce' ).value )
    if ( data ) {
        for ( let key in data ) {
            if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
                params.append( key, data[key] )
            }
        }
    }
    const response = await fetch( url, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        //headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer-when-downgrade',
        //body: JSON.stringify( data )
        body: params
    } )
    return response.json()
}

/**
 * Generate hidden field for form
 * @param  {!string} - Name attribute of input tag
 * @param  {!string} - Value attribute of input tag
 * @return {Object} DOM Object of input tag
 */
function addPostField( name, value ) {
    let newField = document.createElement( 'input' )
    newField.setAttribute( 'type', 'hidden' )
    newField.setAttribute( 'name', name )
    newField.setAttribute( 'value', value )
    return newField
}

export { postData, addPostField }
