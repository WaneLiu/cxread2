import { START_GET_BOOK_DETAIL, SUCCESS_GET_BOOK_DETAIL,
    FAIL_GET_BOOK_DETAIL } from '../../constants/actionTypes'
import * as actions from '../../actions/getBookDetailAction'
import reducer from '../getBookDetailReducer'

describe("get book detail reducer: ", () => {
    it("should return get book detail start: ", () => {
        const action = actions.getBookDetailStart()
        const newState = reducer({}, action)
        expect(newState.type).toBe(START_GET_BOOK_DETAIL)
    })

    it("should return get book detail fail: ", () => {
        const action = actions.getBookDetailFail('error')
        const newState = reducer({}, action)
        expect(newState.type).toBe(FAIL_GET_BOOK_DETAIL)
        expect(newState.error).toBe("error")
    })

    it("should return get book detail success: ", () => {
        const action = actions.getBookDetailSuccess('success')
        const newState = reducer({}, action)
        expect(newState.type).toBe(SUCCESS_GET_BOOK_DETAIL)
        expect(newState.bookDetail).toBe("success")
    })
    
})