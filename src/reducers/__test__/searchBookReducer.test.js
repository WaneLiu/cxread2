import { START_FETCH_SEARCH_RESULT, SUCCESS_FETCH_SEARCH_RESULT, FAIL_FETCH_SEARCH_RESULT} from '../../constants/actionTypes'
import * as actions from '../../actions/searchBookAction'
import reducer from '../searchBookReducer'

describe("search book reducer: ", () => {
    it("should return search start: ", () => {
        const action = actions.searchBookStart()
        const newState = reducer({}, action)
        expect(newState.type).toBe(START_FETCH_SEARCH_RESULT)
    })

    it("should return seatch fail: ", () => {
        const action = actions.searchBookFail('error')
        const newState = reducer({}, action)
        expect(newState.type).toBe(FAIL_FETCH_SEARCH_RESULT)
        expect(newState.error).toBe("error")
    })

    it("should return seatch success: ", () => {
        const action = actions.searchBookSuccess('success')
        const newState = reducer({}, action)
        expect(newState.type).toBe(SUCCESS_FETCH_SEARCH_RESULT)
        expect(newState.fetchBooks).toBe("success")
    })
    
})