import { SET_SEARCH_TEXT } from "../constants/actionTypes";

/**
 * 将用户搜索的关键字存储在state数组中,
 * 此处
 * @param {*} state 
 * @param {*} action 
 */
const setSearchTextReducer = (state='', action) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.text
        default:
            return state
    }
}

export default setSearchTextReducer