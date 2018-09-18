import { START_FETCH_SEARCH_RESULT, SUCCESS_FETCH_SEARCH_RESULT, FAIL_FETCH_SEARCH_RESULT} from '../constants/actionTypes'
import { api } from '../constants/api';
/**
 * 点击搜索按钮时触发的action
 */

const searchBook = text => {
    console.log(text)
    return dispatch => {
        dispatch(searchBookStart()) 
        fetch(api.SEARCH_BOOKS + `?query=${text}`).then(response => {
            response.json().then(responseJson => {
                console.log(responseJson)
                console.log(api.SEARCH_BOOKS + `?query=${text}`)
                if (responseJson.ok) {
                    //最多只展示20个查询结果
                    let books = responseJson.books
                    books.length > 20 ? books = books.slice(0, 20) : books = books
                    dispatch(searchBookSuccess(books))
                }
            }).catch(error => {
                dispatch(searchBookFail(error))
            })
            
        }).catch(error => {
            dispatch(searchBookFail(error))
        })
    }
}

const searchBookStart = () => ({
    type: START_FETCH_SEARCH_RESULT
})

const searchBookSuccess = (books) => ({
    type: SUCCESS_FETCH_SEARCH_RESULT,
    fetchBooks: books
})

const searchBookFail = error => ({
    type: FAIL_FETCH_SEARCH_RESULT,
    error
})

export { searchBook, searchBookStart, searchBookSuccess, searchBookFail }