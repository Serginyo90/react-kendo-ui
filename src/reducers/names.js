const initialState = []

export default function names(store = initialState, action) {
    if (action.type === 'ADD_NAME') {
        return [
            ...store,
            action.payload
        ]
    } else if (action.type === 'FETCH_NAMES_SUCCESS') {
        return action.payload
    }
    return store;
}