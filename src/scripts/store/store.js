import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunkMiddleware from 'redux-thunk'; // action可以是一个函数用来发起异步请求
import createLogger from 'redux-logger'; // action是一个标准的普通对象（plain object），用来记录nextState和action
import {
    combineReducers
} from 'redux-immutablejs';
import Immutable from 'immutable';
import {
    handle
} from '../reducers/todo';

const logger = createLogger();
// 合并reducer
const rootReducer = combineReducers({
    somestate: handle
});

const initialState = Immutable.fromJS({
    somestate: {
        text: 'init do somthing'
    }
});

const configureStore = () => {
    let store = null;

    // 开发环境
    if (module.hot) {
        store = createStore(rootReducer, rootReducer(initialState), compose(
            applyMiddleware(thunkMiddleware, logger), window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    } else {
        // 生产环境
        store = createStore(rootReducer, rootReducer(initialState), compose(
            applyMiddleware(thunkMiddleware), f => f
        ));
    }

    return store;
};
export default configureStore();