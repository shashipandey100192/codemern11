import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Myapi from '../shares/Myapi';
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../reduxpage/Myactions';


function Myloginpage() {
    const navigat =useNavigate();
    const count = useSelector((state) => state.counter.username)
    const dispatch = useDispatch()



    const [login,setlogin]=useState({
        email:"",
        pass:""
    });

    const loginuseer = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setlogin((a)=>{
          return{
            ...a,
            [name]:value
          }
        })
    }

    const userlogin = async()=>{
        const {email,pass}=login;
        if(login.email==="" || login.pass==="")
        {
            alert("Email id and Password is blank!");
        }
        else
        {
            const datares = await fetch(`${Myapi}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, pass
                })
            });
            const resdata = await datares.json();
            // console.log(resdata);
            if(resdata.status===220)
            {
                console.log(resdata);
                // alert("welcome to");
                toast.success("Welcome to Login ",{theme: "dark"});
                setTimeout(()=>{
                    navigat('/dashboard');
                },2000)
                
                
            }

            if(resdata.status===620)
            {
                alert("user not found");
            }

            if(resdata.status===421)
                {
                    alert("email and password don't match");
                }
        }

    }




  return (
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-5 bg-warning p-3 rounded shadow'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div className="mb-3">
                          <p className='h2'>Welcome to Login page</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="mb-3">
                            <label className="form-label"> <MdEmail/> Email address</label>
                            <input type="email" className="form-control" name='email' value={login.email} onInput={loginuseer}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="mb-3">
                            <label className="form-label"><RiLockPasswordFill/> Password</label>
                            <input type="password" className="form-control" name='pass' value={login.pass} onInput={loginuseer}/>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div className="mb-3">
                           <button className='btn btn-success c-btn' type="button" onClick={userlogin}>Login</button>
                           <Link to="registor" className="btn c-btn ms-3 ">Registor Now</Link>
                           {/* <Link to="dashboard" className="btn">dashboard</Link> */}
                           <button type='button' onClick={() => dispatch(increment())}> inc {count}</button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Myloginpage