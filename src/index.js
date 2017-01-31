import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import reducer from './reducers';
import ItemsList from './modules/ItemsList';
import Schedule from './modules/Schedule';

import subscribe from './updateManager';

const items = new ItemsList([{id:0, body:'bumming'}]);
const schedule = new Schedule(items.getAll());

const initialState = {
  items: items.getAll(),
  schedule: schedule.getAll().schedule
}

const store = configureStore(reducer, initialState);
subscribe(store, schedule, items);

export default ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
