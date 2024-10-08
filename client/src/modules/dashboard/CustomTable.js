import React,{useState,useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function CustomTable() {
    const [user, setuser] = useState([])
    const getalldata = () => {
        axios.get("http://localhost:8900/alldata").then((d) => {
            console.log(d.data);
            setuser(d.data);
        });
    }

    useEffect(() => {
        getalldata();
    }, [])


const deletedata = async(id)=>
{
    await axios.delete(`http://localhost:8900/deleterecord/${id}`).then((d)=>{
        console.log(d);
        getalldata();
    })
}



    return (
        <Fragment>
        <div className='container-fluid'>
    <div className='row'>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-success text-white">
                <div className="card-body">
                    <span className="card-title h4">Total: {user.length}</span>
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
        <table className="table table-bordered border-primary">
            <thead>
                <tr>
                    <th scope="col">MongodbId</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Email id</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Course</th>
                    <th scope="col" className='text-end'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {user.map((d) => {
                    return (
                        <tr>
                            <th scope="row">{d._id}</th>
                            <td>{d.fullname}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                            <td>{d.dob}</td>
                            <td>{d.course}</td>
                            <td className='text-end'>
                                <Link to="" className="badge text-bg-primary">Edit</Link>
                                <button  className="btn badge text-bg-danger" onClick={()=>deletedata(d._id)}>Del</button>
                                <Link to={'details/'+d._id} className="badge text-bg-info" >View</Link>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
        </Fragment>

    )
}

export default CustomTable