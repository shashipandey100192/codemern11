import React from 'react';
import { Link } from 'react-router-dom';

function Myloginpage() {
  return (
    <div className='container'>
    <div className='row justify-content-center'>
        <div className='col-md-5 bg-warning p-3 rounded shadow'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-12 text-center'>
                        <div class="mb-3">
                          <p className='h2'>Welcome to Login page</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control" />
                        </div>
                    </div>
                    <div className='col-12'>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" />
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <div class="mb-3">
                           <button className='btn btn-success c-btn'>login</button>
                           <Link to="registor" className="btn">Registor Now</Link>
                           <Link to="dashboard" className="btn">dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Myloginpage