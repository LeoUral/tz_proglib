import { createStore } from 'redux';
import initialState from './initialState';
import reducer from './reducer';

const store = createStore(reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // ! для отслеживания REDUX в браузере 
);

export default store;