import React from 'react'
import Myheaderpage from '../shares/Myheaderpage'
import Mysidebar from '../shares/Mysidebar'
import { Outlet } from 'react-router-dom'

function Mylandingpge() {
  return (
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-2 g-0'>
        <Mysidebar/>
      </div>
      <div className='col-md-10 g-0'>
        <Myheaderpage/>
        <div className='page'>
          <Outlet></Outlet>

        </div>

      </div>
    </div>
   </div>
  )
}

export default Mylandingpge