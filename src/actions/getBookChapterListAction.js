import { START_GET_CHAPTER_LIST, SUCCESS_GET_CHAPTER_LIST, 
    FAIL_GET_CHAPTER_LIST } from '../constants/actionTypes'
import { api } from '../constants/api';

/**
 * @param bookId
 * 根据bookId获取书籍章节列表
 */
export const getBookChapterList = bookId => {
    return dispatch => {
        dispatch(getBookChapterListStart())
        return fetch(api.READ_BOOK_CHAPTER_LIST(bookId)).then(response => {
            response.json().then(responseJson => {
                if (responseJson.ok) {
                    //console.log(JSON.stringify(responseJson))
                    let bookChaptersObj = responseJson.mixToc
                    return dispatch(getBookChapterListSuccess(bookChaptersObj))
                }
                return dispatch(getBookChapterListFail())
                
            }).catch(error => {
                dispatch(getBookChapterListFail(error))
            })
        }).catch(error => {
            dispatch(getBookChapterListFail(error))
        })
    }
}

export const getBookChapterListStart = () => ({
    type: START_GET_CHAPTER_LIST
})

export const getBookChapterListSuccess = (bookChaptersObj) => ({
    type: SUCCESS_GET_CHAPTER_LIST,
    bookChaptersObj: bookChaptersObj
})

export const getBookChapterListFail = (error) => ({
    type: FAIL_GET_CHAPTER_LIST,
    error
})
