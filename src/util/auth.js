import {get_decoded_token, get_token} from './login';

export var auth_fetch = (url,args) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (get_decoded_token()) {
        headers['AUTH-TOKEN'] = 'Bearer ' + get_token()
    }

    return fetch(url, {
        headers,
        ...args
    }).then(
        _checkStatus
    ).then(
        response => response.json()
    )
}

var api_fetch = (url,args) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    // headers['api_key'] = 'our api key'

    return fetch(url, {
        headers,
        ...args
    }).then(
        _checkStatus
    ).then(
        response => response.json()
    )
}

var _checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export default api_fetch;