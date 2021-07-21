import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {appReducer} from './store/reducer';
import{createAPI} from './api';
import {checkAuth, fetchContacts} from './store/api-actions';

const api = createAPI();

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

store.dispatch(fetchContacts());
store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
