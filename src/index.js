import state from './redux/state'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMassageItem, addPostsItem, changePostText, subscraib} from './redux/state'


export const reRender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App state={state} 
             addMassageItem={addMassageItem} 
             addPostsItem={addPostsItem} 
             changePostText={changePostText} />
      </React.StrictMode>
    );
  }


reRender(state)

subscraib(reRender)

reportWebVitals();