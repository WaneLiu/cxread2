import { START_GET_CHAPTER_LIST, SUCCESS_GET_CHAPTER_LIST, 
    FAIL_GET_CHAPTER_LIST } from '../constants/actionTypes'
/**
 * 根据bookId获取书籍列表
 * 书籍列表存储在 state.chapters,即bookChaptersObj.chapters
 */
export default (state = {}, action) => {
    switch (action.type) {
        case START_GET_CHAPTER_LIST:
            return { type: action.type }
        case SUCCESS_GET_CHAPTER_LIST:
            return {type: action.type, 
                bookChaptersObj: action.bookChaptersObj}
        case FAIL_GET_CHAPTER_LIST:
            return { type: action.type, error: action.error}
        default:
            return state
    }
}