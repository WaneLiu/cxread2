import { combineReducers } from 'redux'
import searchText from './setSearchTextReducer'
import searchBookResult from './searchBookReducer'
const rootReducers = combineReducers({
    searchText, searchBookResult
})

export default rootReducers