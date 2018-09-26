import { SET_SEARCH_TEXT } from '../../constants/actionTypes'
import * as actions from '../../actions/setSearchTextAction'
import reducer from '../../reducers/setSearchTextReducer'
describe("set search text reducer", () => {
    it("should return start set: ", () => {
        const action = actions.setSearchTextAction('nba')
        const newState = reducer('', action)
        expect(newState).toBe('nba')
    })
})