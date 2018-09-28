import { combineReducers } from 'redux'
import searchText from './setSearchTextReducer'
import searchBookResult from './searchBookReducer'
import bookDetail from './getBookDetailReducer'
//bookChaptersObj.chapters存储的是章节列表
import bookChaptersObj from './getBookChapterListReducer'
import readHistory from './readHistoryReducer'
import chapterContent from './getCurrentChapterContentReducer'
const rootReducers = combineReducers({
    searchText, searchBookResult, bookDetail, bookChaptersObj, readHistory, chapterContent
})

export default rootReducers