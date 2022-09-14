import store from './redux/store'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const reRender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App state={state} 
             dispatch={store.dispatch.bind(store)}   />
      </React.StrictMode>
    );
  }


reRender(store.getState())

store.subscraib(reRender)

reportWebVitals();