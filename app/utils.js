export const URLS = {
    KOWECHUB_PING: "http://192.168.4.1:5005/kowechkacheck",
    INTERNAL_CALL_DOCTOR: "http://192.168.4.1:5005/request",
    EXTERNAL_CALL_DOCTOR: "http://195.19.40.201:32241/request"
}

export const sendDataPost = (url, data) => {
    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch(url, options)
}