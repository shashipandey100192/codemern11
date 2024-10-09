import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Usereditpage() {
    const mynavigt = useNavigate();
    const {id} = useParams();
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

    const edituser = ()=>{
        axios.get(`http://localhost:8900/singleuser/${id}`).then((d)=>{
            console.log(d);
           setuser(d.data);
         });
        }
useEffect(()=>{
    edituser();
},[]);


const changedetails = async()=>{
    const { email,fullname,phone,course,dob,pass} = user;
    const res = await fetch(`http://localhost:8900/updateuser/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,fullname,phone,course,dob,pass
        })
        
    });
    const data = await res.json();
    console.log(data);
    alert("update record");
    mynavigt("/dashboard");
    
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
                          <p className='h2'>User Edit Page</p>
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
                           <button type="button" className='btn btn-success c-btn' onClick={changedetails}>Change</button>
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

export default Usereditpage