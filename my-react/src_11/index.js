import React from "react";
import ReactDOM from "react-dom/client";
import {App1} from "./components/App1"
import {App2} from "./components/App2"
import {App3} from "./components/App3"
import {App4} from "./components/App4"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App1 />
    <p>--------------------------------</p>
    <App2 />
    <p>--------------------------------</p>
    <App3 />
    <p>--------------------------------</p>
    <App4 />
  </React.StrictMode>
)
