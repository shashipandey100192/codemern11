import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Myapi from '../shares/Myapi';

function Myregistrpage() {
    const navigat = useNavigate();

    const [user,setuser]=useState({
        email:"",
        fullname:"",
        course:"",
        dob:"",
        phone:"",
        pass:""
    });

    const  updateuseer = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setuser((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
    }


    const mysubmitdata = async()=>{
        const { email,fullname,phone,course,dob,pass} = user;
        if(user.email==="" || user.fullname==="" || user.pass==="")
        {
            alert("your form is invalid");
        }
        else
        {
        const res = await fetch(`${Myapi}/registoruser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,fullname,phone,course,dob,pass
            })
            
        });
        const data = await res.json();
        // console.log(data);
        alert("welcome to regis");
        navigat("/");
    }
        
    }




  return (
    <form>
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-8 bg-warning p-3 rounded shadow'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div className="mb-3">
                          <p className='h2'>Welcome to Registor Page</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' value={user.email} onInput={updateuseer}/>
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">FullName</label>
                            <input type="text" className="form-control" name='fullname' value={user.fullname} onInput={updateuseer}/>
                           
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="text" className="form-control" name='phone' value={user.phone} onInput={updateuseer}/>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">DOB</label>
                            <input type="date" className="form-control" name='dob' value={user.dob} onInput={updateuseer}/>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Course</label>
                           <select className='form-select' name='course' value={user.course} onChange={updateuseer}>
                            <option>mern</option>
                            <option>mean</option>
                            <option>java</option>
                           </select>
                          
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name='pass' value={user.pass} onInput={updateuseer}/>
                           
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3">
                           <button type="button" className='btn btn-success c-btn' onClick={mysubmitdata}>Registor Now</button>
                           <Link to="/">login page</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</form>
  )
}

export default Myregistrpage