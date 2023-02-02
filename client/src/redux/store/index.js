import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';// esto habilita que se pueda devolver del action creator una funcion (la cual tendria como argumento el dispatch)
import rootReducer from '../reducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

//LA OTRA MANERA
// import { applyMiddleware, compose, createStore } from 'redux';
//                              ^

// import thunk from 'redux-thunk';
// import rootReducer from '../reducer';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store= createStore(reducer, composeEnhancers(applyMiddleware(thunk)))





