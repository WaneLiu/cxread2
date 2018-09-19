/**
 * action在搜索框输入内容时触发
 */
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

/**
 * 在搜索框输入内容后点击search时触发
 * 搜索action start success fail
 */
export const START_FETCH_SEARCH_RESULT = 'START_FETCH_SEARCH_RESULT'
export const SUCCESS_FETCH_SEARCH_RESULT = 'SUCCESS_FETCH_SEARCH_RESULT'
export const FAIL_FETCH_SEARCH_RESULT = 'FAIL_FETCH_SEARCH_RESULT'

/**
 * 点击book时，获取书籍详情时触发的action
 */
export const START_GET_BOOK_DETAIL = 'START_GET_BOOK_DETAIL'
export const SUCCESS_GET_BOOK_DETAIL = 'SUCCESS_GET_BOOK_DETAIL'
export const FAIL_GET_BOOK_DETAIL = 'FAIL_GET_BOOK_DETAIL'

/**
 * 点击book时，获取书籍章节列表时触发的action
 */
export const START_GET_CHAPTER_LIST = 'START_GET_CHAPTER_LIST'
export const SUCCESS_GET_CHAPTER_LIST = 'SUCCESS_GET_CHAPTER_LIST'
export const FAIL_GET_CHAPTER_LIST = 'FAIL_GET_CHAPTER_LIST'

