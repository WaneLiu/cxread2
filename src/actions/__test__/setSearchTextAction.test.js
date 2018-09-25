import { SET_SEARCH_TEXT } from '../../constants/actionTypes'
import { setSearchTextAction } from '../setSearchTextAction'

describe("Set_Search_Text", () => {
    it("set search text1", () => {
        const text = "快穿之女配"
        const action = setSearchTextAction(text)
        expect(action.text).toBe(text)
        expect(action.type).toBe(SET_SEARCH_TEXT)
        expect(action.id).toBe(0)
    })
    it("set search text2", () => {
        const text = "神雕侠侣"
        const action = setSearchTextAction(text)
        expect(action.type).toBe(SET_SEARCH_TEXT)
        expect(action.text).toBe(text)
        expect(action.id).toBe(1)
    })
})