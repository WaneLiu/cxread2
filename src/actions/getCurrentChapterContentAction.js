import { START_GET_CUR_CHAPTER_CONTENT, FAIL_GET_CUR_CHAPTER_CONTENT, SUCCESS_GET_CUR_CHAPTER_CONTENT } from "../constants/actionTypes";
import { api } from "../constants/api";

export const getCurrentChapterContent = (chapterLink) => {
    chapterLink = chapterLink.replace(/\//g, '%2F').replace('?', '%3F')
    return dispatch => {
        dispatch(getCurrentChapterContentStart())
        return fetch(api.READ_BOOK_CHAPTER_CONTENT_URL(chapterLink)).then(response => {
            response.json().then(responseJson => {
                if (responseJson.ok) {
                    let chapterContent = responseJson.chapter
                    dispatch(getCurrentChapterContentSuccess(chapterContent))
                }
            }).catch(error => {
                dispatch(getCurrentChapterContentFail(error))
            })
        }).catch(error => {
            dispatch(getCurrentChapterContentFail(error))
        })
    }
}

export const getCurrentChapterContentStart = () => ({
    type: START_GET_CUR_CHAPTER_CONTENT
})

export const getCurrentChapterContentSuccess = (chapterContent) => ({
    type: SUCCESS_GET_CUR_CHAPTER_CONTENT,
    chapterContent
})

export const getCurrentChapterContentFail = error => ({
    type: FAIL_GET_CUR_CHAPTER_CONTENT,
    error
})