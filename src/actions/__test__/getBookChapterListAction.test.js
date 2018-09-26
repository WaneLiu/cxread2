import thunk from 'redux-thunk';
import {stub} from 'sinon';
import configureStore from 'redux-mock-store';
import * as actions from '../getBookChapterListAction'
import * as actionTypes from '../../constants/actionTypes'
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("Get Book Chapter List Action", () => {
    let stubbedFetch
    const store = new createMockStore()
    beforeEach(() => {
        stubbedFetch = stub(global, 'fetch')
    })
    afterEach(() => {
        stubbedFetch.restore()
    })

    it("should dispatch get book chapter list action type on fetch success", () => {
        const mockResponse = Promise.resolve({
            status: 200,
            json: () => Promise.resolve({ok: true, mixToc: {}})
        })
        stubbedFetch.returns(mockResponse)
        return store.dispatch(actions.getBookChapterList('nba')).then(() => {
            const dispatchActions = store.getActions()
            expect(dispatchActions.length).toBe(2)
            expect(dispatchActions[0].type).toBe(actionTypes.START_GET_CHAPTER_LIST)
            expect(dispatchActions[1].type).toBe(actionTypes.SUCCESS_GET_CHAPTER_LIST)
        })
    })
})