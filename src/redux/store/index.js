import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer,statusReducer,engageReducer} from '../reducers';

const rootReducer = combineReducers({userReducer,statusReducer,engageReducer});

export const Store=createStore(rootReducer,applyMiddleware(thunk));
