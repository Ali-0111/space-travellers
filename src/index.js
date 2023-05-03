import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </BrowserRouter>,
);
