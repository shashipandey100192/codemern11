import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'react-toastify/dist/ReactToastify.css';
import "./css/style.css";
import {Routes, Route,BrowserRouter} from "react-router-dom"
import Myloginpage from './modules/auth/Myloginpage';
import Myregistrpage from './modules/auth/Myregistrpage';
import Mylandingpge from './modules/dashboard/Mylandingpge';
import Myerrorpage from './modules/shares/Myerrorpage';
import Mainpage from './modules/dashboard/Mainpage';
import Userdetailspage from './modules/dashboard/Userdetailspage';
import Usereditpage from './modules/dashboard/Usereditpage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<Myloginpage/>}></Route>
          <Route path='registor' element={<Myregistrpage/>}></Route>
          <Route path='dashboard' element={<Mylandingpge/>}>
                <Route path='' element={<Mainpage/>}></Route>
                <Route path='details/:id' element={<Userdetailspage/>}></Route>
                <Route path='edituser/:id' element={<Usereditpage/>}></Route>
          
          </Route>
          <Route path='*' element={<Myerrorpage/>}/>

      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);
