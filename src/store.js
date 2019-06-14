import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from "redux-logger";
import { movieDetailsReducer } from './reducers/movieDetailsReducer';
import apiMiddleware from './middleWare/apiMiddleWare';
import thunk from 'redux-thunk';


function configureStore() {
  const middleware = applyMiddleware(logger, apiMiddleware, thunk);
  const enhancer = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const store = createStore(
    movieDetailsReducer,
    enhancer
  );

  persistStore(store);

  return store;
}

export default configureStore();
