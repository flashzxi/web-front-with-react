import React from 'react';
import ReactDOM from 'react-dom/client';
import ControllerCenter from './components/ControllerCenter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BeiAn from './components/BeiAn';
import styles from "./components/css/ControllerCenter.module.css"

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import NetDisk from './components/NetDisk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <div className="wrap">
        <div className="controller">
          <ControllerCenter></ControllerCenter>
        </div>
        <div className="router">
          <NetDisk/>
        </div>
        <BeiAn/>
      </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
