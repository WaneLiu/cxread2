import thunk from 'redux-thunk';
import {stub} from 'sinon';
import configureStore from 'redux-mock-store';
import * as actions from '../getBookDetailAction'
import * as actionTypes from '../../constants/actionTypes'
const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

describe("Get_Book_Detail_Action", () => {
    let stubbedFetch
    const store = new createMockStore()
    beforeEach(() => {
        stubbedFetch = stub(global, 'fetch')
    })
    afterEach(() => {
        stubbedFetch.restore()
    })

    it("should dispatch get book detail action type on fetch success", () => {
        const mockResponse = Promise.resolve({
            status: 200,
            json: () => Promise.resolve({})
        })
        stubbedFetch.returns(mockResponse)
        return store.dispatch(actions.getBookDetail('nba')).then(() => {
            const dispatchActions = store.getActions()
            expect(dispatchActions.length).toBe(2)
            expect(dispatchActions[0].type).toBe(actionTypes.START_GET_BOOK_DETAIL)
            expect(dispatchActions[1].type).toBe(actionTypes.SUCCESS_GET_BOOK_DETAIL)
        })
    })
})