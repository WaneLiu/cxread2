/**
 * searchBookAction dispatch到这个reducer
 * 用来存储搜索结果
 */
import { START_FETCH_SEARCH_RESULT, SUCCESS_FETCH_SEARCH_RESULT, FAIL_FETCH_SEARCH_RESULT } from '../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case START_FETCH_SEARCH_RESULT:
            return { type: action.type }
        case SUCCESS_FETCH_SEARCH_RESULT:
            return {fetchBooks: action.fetchBooks, type: SUCCESS_FETCH_SEARCH_RESULT}
        case FAIL_FETCH_SEARCH_RESULT:
            return {type: action.error}
        default:
            return state
    }
}

