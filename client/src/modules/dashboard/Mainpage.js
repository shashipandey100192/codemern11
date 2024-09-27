import React, { useEffect } from 'react';
import axios from 'axios';

function Mainpage() {
    const getalldata = ()=>{
            axios.get("http://localhost:8900/alldata").then((d)=>{
                console.log(d.data);
            });
            // fetch("http://localhost:8900/alldata").then((d)=>{
            //     return d.json()
            // }).then((dts)=>{
            //     console.log(dts);
            // })
    }

    useEffect(()=>{
        getalldata();
    },[])



  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-success text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'></span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-warning text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-info text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-primary text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-danger text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Mainpage