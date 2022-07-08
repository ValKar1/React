import React from 'react';
import ReactDOM from 'react-dom/client';
import {App1} from './components/App1';
import {App2} from './components/App2';
import {App3} from './components/App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
// JSX
root.render(
  <React.StrictMode>
    <App1 />
    <p>--------------------------------------------------</p>
    <App2 />
    <p>--------------------------------------------------</p>
    <App3 />
  </React.StrictMode>
);
