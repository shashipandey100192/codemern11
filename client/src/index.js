import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/style.css";
import {Routes, Route,BrowserRouter} from "react-router-dom"
import Myloginpage from './modules/auth/Myloginpage';
import Myregistrpage from './modules/auth/Myregistrpage';
import Mylandingpge from './modules/dashboard/Mylandingpge';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mainpage from './modules/dashboard/Mainpage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Myloginpage/>}></Route>
          <Route path='registor' element={<Myregistrpage/>}></Route>
          <Route path='dashboard' element={<Mylandingpge/>}>
                <Route path='' element={<Mainpage/>}></Route>
          
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>

      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);
