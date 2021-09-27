import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import combine from './reducers';

const middleWare = applyMiddleware(thunk, createLogger());

export default createStore(combine, middleWare);