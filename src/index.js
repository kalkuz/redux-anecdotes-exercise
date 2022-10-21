import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import filterReducer, { filterChange } from './reducers/filterReducer';
import anecdoteReducer from './reducers/anecdoteReducer';
import notifReducer from './reducers/notificationReducer';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notifReducer,
});

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
