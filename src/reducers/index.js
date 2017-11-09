import { combineReducers } from 'redux'
import names from './names'
import filterNames from './filterNames'

export default combineReducers({
    names,
    filterNames
})