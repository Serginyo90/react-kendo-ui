const initialState = ''

export default function filterNames(store = initialState, action) {
    if (action.type === 'FILTER_NAMES') {
        return action.payload
    }
    return store;
}