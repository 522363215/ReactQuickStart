import Types from '../actiontypes/types';
import Immutable from 'immutable';
import {
    createReducer
} from 'redux-immutablejs';


const initialState = Immutable.fromJS({
    text: 'default dosomething'
});

const handle = createReducer(initialState, {
    [Types.TODO]: (state, action) => state.update('text', v => action.data)
});

export {
    handle
};