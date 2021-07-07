export function increment () {
    return {
        type: 'INCREMENT'
    }
}

export function decrement () {
    return {
        type: 'DECREMENT'
    }
}

export function cambiarNombre (payload) {
    return {
        type: 'CHANGENAME',
        payload
    }
}