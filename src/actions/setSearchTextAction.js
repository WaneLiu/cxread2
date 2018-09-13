import { SET_SEARCH_TEXT } from '../constants/actionTypes'
/**
 * 搜索书名或作者
 * @param {*} text 
 */

//将用户搜索的关键字， 存在{id:id, text:text}对象中
let searchId = 0

export const setSearchTextAction = (text) => ({
    type: SET_SEARCH_TEXT,
    text,
    id: searchId++
})