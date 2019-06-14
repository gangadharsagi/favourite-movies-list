import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { MovieDetailsContainer } from './containers/MovieDetailsContainer';

const App = () => {

  return (
    <Provider store={store}>
      <MovieDetailsContainer />
    </Provider>
  );
};

export default App;
