import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import {StopUhrComponent} from "./components/StopUhrComponent"
import {StopUhrComponent2} from "./components/StopUhrComponent2"
import {FunctionalComponent} from './components/FunctionalComponent'

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
    <p>-------- EEE --------</p>
    <FunctionalComponent number="1)" />
    <StopUhrComponent />
    <StopUhrComponent2 />
  </React.StrictMode>
);
