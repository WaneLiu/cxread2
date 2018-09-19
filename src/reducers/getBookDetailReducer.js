/**
 * 根据bookId获取书籍详情
 */
import { START_GET_BOOK_DETAIL, SUCCESS_GET_BOOK_DETAIL,
    FAIL_GET_BOOK_DETAIL } from '../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case START_GET_BOOK_DETAIL:
            return {type: START_GET_BOOK_DETAIL}
        case SUCCESS_GET_BOOK_DETAIL:
            return {type: action.type, bookDetail: action.bookDetail}
        case FAIL_GET_BOOK_DETAIL:
            return {type: action.type, error: action.error}
        default:
            return state
    }
}