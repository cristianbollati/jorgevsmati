const initialState = {
    contador: 0,
    cristian: 'cordobes'
}

export default function Reducer (state = initialState, action) {
    switch(action.type){
        case 'INCREMENT':
        return {...state, contador: state.contador + 1}
        case 'DECREMENT':
        return {...state, contador: state.contador - 1}
        case 'CHANGENAME':
        return {...state, cristian: action.payload}   
        default:
        return state;
    }
}
