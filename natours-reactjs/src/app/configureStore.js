import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import fetchDataReducer from './fetchDataReducer';
import authReducer from './authReducer';
import errorReducer from './errorsReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  fetchData: fetchDataReducer,
  auth: authReducer,
  errors: errorReducer,
});

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
}
