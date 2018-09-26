import { START_GET_BOOK_DETAIL, SUCCESS_GET_BOOK_DETAIL,
    FAIL_GET_BOOK_DETAIL } from '../constants/actionTypes'
import { api } from '../constants/api';
/**
 * @param bookId
 * 根据bookId获取书籍详情
 */
const getBookDetail = bookId => {
    return dispatch => {
        dispatch(getBookDetailStart())
        return fetch(api.BOOK_DETAIL(bookId)).then(response => {
            response.json().then(responseJson => {
                return dispatch(getBookDetailSuccess(responseJson))
            }).catch(error => {
                dispatch(getBookDetailFail(error))
            })
        }).catch(error => {
            dispatch(getBookDetailFail(error))
        })
    }
}

const getBookDetailStart = () => ({
    type: START_GET_BOOK_DETAIL
})

const getBookDetailSuccess = (bookDetail) => ({
    type: SUCCESS_GET_BOOK_DETAIL,
    bookDetail
})

const getBookDetailFail = (error) => ({
    type: FAIL_GET_BOOK_DETAIL,
    error
})

export { getBookDetail, getBookDetailStart, getBookDetailSuccess, getBookDetailFail }