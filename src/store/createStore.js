import { createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './ducks/users';

const rootReducer = combineReducers({
    form: formReducer,
    users
});

export default (initialState = {}) => {
    let composeEnhancers = compose;
    const reduxDevToolsExtCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (process.env.NODE_ENV === 'development' && reduxDevToolsExtCompose) {
    composeEnhancers = reduxDevToolsExtCompose;
  }

    return createStore(rootReducer, initialState, composeEnhancers());
}
