import thunk from 'redux-thunk';
import {stub} from 'sinon';
import configureStore from 'redux-mock-store';
import * as actions from '../searchBookAction'
import * as actionTypes from '../../constants/actionTypes'
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe('Search_Book_Action', () => {
    let stubbedFetch
    const store = new createMockStore()
    beforeEach(() => {
        stubbedFetch = stub(global, 'fetch')
    })

    it("should dispatch search_book_success action type on fetch success", () => {
        const mockResponse = Promise.resolve({
            status: 200,
            json: () => Promise.resolve({ok: true, books: ["asd","nba"]})
        })
        stubbedFetch.returns(mockResponse)
        return store.dispatch(actions.searchBook('nba')).then(() => {
            const dispatchedActions = store.getActions()
            expect(dispatchedActions.length).toBe(2)
            expect(dispatchedActions[0].type).toBe(actionTypes.START_FETCH_SEARCH_RESULT)
            expect(dispatchedActions[1].type).toBe(actionTypes.SUCCESS_FETCH_SEARCH_RESULT)
        })
    })

    afterEach(() => {
        stubbedFetch.restore()
    })
})