import React from 'react';
import ReactDOM from 'react-dom/client';
import ControllerCenter from './components/ControllerCenter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BeiAn from './components/BeiAn';
import styles from "./components/css/ControllerCenter.module.css"
import Error from './Error';

import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import NetDisk from './components/NetDisk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <div className="wrap">
        <BrowserRouter basename='/'>
          <div className="controller">
            <ControllerCenter/>
          </div>
          <div className="router">
            <Routes>
              {/* <Route path='/' element={<NetDisk/>}></Route> */}
              <Route path='netdisk' element={<NetDisk/>}></Route>
              <Route path='error' element={<Error/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        <BeiAn/>
      </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
