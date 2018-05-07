import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import auth from './reducers/getTokenReducer';
import userDetails from './reducers/getUserDetailsReducer';

export default createStore(
  combineReducers({ auth, userDetails }),
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
