import { createStore } from 'redux';

const configureStore = (reducer, initialState) => {
  return createStore(reducer, initialState);
}

export default configureStore;