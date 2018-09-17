import { START_FETCH_SEARCH_RESULT, SUCCESS_FETCH_SEARCH_RESULT, FAIL_FETCH_SEARCH_RESULT} from '../constants/actionTypes'
import { api } from '../constants/api';
/**
 * 点击搜索按钮时触发的action
 */

const searchBook = text => {
    //console.log(text)
    return dispatch => {
        dispatch(searchBookStart()) 
        fetch(api.SEARCH_BOOKS + `?query={text}`).then(response => {
            response.json().then(responseJson => {
                console.log(responseJson)
                if (responseJson.ok) dispatch(searchBookSuccess(responseJson.books))
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

const searchBookSuccess = (result) => ({
    type: SUCCESS_FETCH_SEARCH_RESULT,
    fetchBooks: result
})

const searchBookFail = error => ({
    type: FAIL_FETCH_SEARCH_RESULT,
    error
})

export { searchBook, searchBookStart, searchBookSuccess, searchBookFail }