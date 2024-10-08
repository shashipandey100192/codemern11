import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Userdetailspage() {
    const {id} = useParams();

    const [userdetail,userset]=useState({})

const singleuser= ()=>{
    axios.get(`http://localhost:8900/singleuser/${id}`).then((d)=>{
        console.log(d);
        userset(d.data);
    })

}

useEffect(()=>{
    singleuser();
},[]);

  return (
    
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <h1>User Details Page</h1>
            </div>
            <div className='col-12'>
                <h1> user Id: {userdetail._id} </h1>
                <h2> {userdetail.fullname}</h2>
                <h2> {userdetail.email}</h2>
                <h2> {userdetail.phone}</h2>
            </div>
        </div>
    </div>
  )
}

export default Userdetailspage