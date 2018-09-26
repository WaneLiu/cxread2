import { START_GET_CHAPTER_LIST, SUCCESS_GET_CHAPTER_LIST, 
    FAIL_GET_CHAPTER_LIST } from '../../constants/actionTypes'
import * as actions from '../../actions/getBookChapterListAction'
import reducer from '../getBookChapterListReducer'

describe("get book chapter reducer: ", () => {
    it("should return get book chapter start: ", () => {
        const action = actions.getBookChapterListStart()
        const newState = reducer({}, action)
        expect(newState.type).toBe(START_GET_CHAPTER_LIST)
    })

    it("should return get book chapter fail: ", () => {
        const action = actions.getBookChapterListFail('error')
        const newState = reducer({}, action)
        expect(newState.type).toBe(FAIL_GET_CHAPTER_LIST)
        expect(newState.error).toBe("error")
    })

    it("should return get book chapter success: ", () => {
        const action = actions.getBookChapterListSuccess('success')
        const newState = reducer({}, action)
        expect(newState.type).toBe(SUCCESS_GET_CHAPTER_LIST)
        expect(newState.bookChaptersObj).toBe("success")
    })
    
})