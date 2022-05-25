import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';

// import ReactD from 'react-dom';
// Babel live editor: https://babeljs.io/repl
// ReactD.render(
//   React.createElement('p', null, 'Hallo Welt!!!'),
//   document.getElementById('root')
// )

const nameObj = {
  prename: 'Vorname',
  lastname: 'Nachname'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// JSX
root.render(
  <React.StrictMode>
    <App title="test" name="linkedIn" nameObj={nameObj} coolKid={<p>Cool!</p>}>
      <p>Die Learning Cat ist eine wissbegierige Katze</p>
    </App>
  </React.StrictMode>
);
