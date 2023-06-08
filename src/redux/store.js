
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import signupReducer from './reducers/signupReducer';

const store = createStore(signupReducer, applyMiddleware(thunk));

export default store