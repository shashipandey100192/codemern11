import React, { useEffect, useState } from 'react';
import Mymaindata from './Mymaindata';
import axios from 'axios';
import CustomTable from './CustomTable';

function Mainpage() {
    const [user, setuser] = useState([])

    const getalldata = () => {
        axios.get("http://localhost:8900/alldata").then((d) => {
            console.log(d.data);
            setuser(d.data);
        });
        // fetch("http://localhost:8900/alldata").then((d)=>{
        //     return d.json()
        // }).then((dts)=>{
        //     console.log(dts);
        // })
    }

    useEffect(() => {
        getalldata();
    }, [])



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <CustomTable></CustomTable>
                    <Mymaindata></Mymaindata>

                </div>
            </div>



        </div>
    )
}

export default Mainpage