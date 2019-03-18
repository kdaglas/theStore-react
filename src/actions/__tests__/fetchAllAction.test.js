import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import fetchAllAction from '../fetchAllAction';
import ActionTypes from '../ActionTypes';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const token = localStorage.setItem('token', 'token')
describe('fetch async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('should fetch without fail', () => {
        fetchMock.getOnce('https://douglas-thestore-db.herokuapp.com/api/v2/products', {
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                All_products:[]
            },
        });
        const store = mockStore({});
        const expectedAction =  [ { type: 'FETCH_PRODUCTS_SUCCESS', payload: [] } ]
        return store.dispatch(fetchAllAction()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        });
    });
});
