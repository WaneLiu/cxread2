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

/**
 * 点击章节获取章节内容=>read页面
 */
export const START_GET_CUR_CHAPTER_CONTENT = 'START_GET_CUR_CHAPTER_CONTENT'
export const SUCCESS_GET_CUR_CHAPTER_CONTENT = 'SUCCESS_GET_CUR_CHAPTER_CONTENT'
export const FAIL_GET_CUR_CHAPTER_CONTENT = 'FAIL_GET_CUR_CHAPTER_CONTENT'

/**
 * 更新书籍当前章节
 */
export const UPDATE_CURRENT_CHAPTER_NUM = 'UPDATE_CURRENT_CHAPTER_NUM'

/**
 * 点击开始阅读触发的action
 */
export const READ_BOOK_START = 'READ_BOOK_START'
export const READ_BOOK_MIDDLE = 'READ_BOOK_MIDDLE'
/**
 * 记录用户的阅读历史
 */
export const ADD_READ_HISTORY = 'ADD_READ_HISTORY'
export const MODIFY_READ_HISTORY = 'MODIFY_READ_HISTORY'


