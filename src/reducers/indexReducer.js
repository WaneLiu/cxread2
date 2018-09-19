import { combineReducers } from 'redux'
import searchText from './setSearchTextReducer'
import searchBookResult from './searchBookReducer'
import bookDetail from './getBookDetailReducer'
//bookChaptersObj.chapters存储的是章节列表
import bookChaptersObj from './getBookChapterListReducer'

const rootReducers = combineReducers({
    searchText, searchBookResult, bookDetail, bookChaptersObj
})

export default rootReducers