import { START_GET_CUR_CHAPTER_CONTENT, FAIL_GET_CUR_CHAPTER_CONTENT, SUCCESS_GET_CUR_CHAPTER_CONTENT } from "../constants/actionTypes";

/**
 * 存储read page页面显示的内容
 */

export default (state = {}, action) => {
    switch(action.type) {
        case START_GET_CUR_CHAPTER_CONTENT:
            return {type: START_GET_CUR_CHAPTER_CONTENT}
        case SUCCESS_GET_CUR_CHAPTER_CONTENT:
            return {type: SUCCESS_GET_CUR_CHAPTER_CONTENT, chapterContent: action.chapterContent}
        case FAIL_GET_CUR_CHAPTER_CONTENT:
            return {type: FAIL_GET_CUR_CHAPTER_CONTENT, error: action.error}
        default:
            return state
    }
}