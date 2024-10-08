import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: '_id', headerName: 'MongoId', width: 200 },
    { field: 'fullname', headerName: 'Name', width: 200 },
    {
      field: 'course',
      headerName: 'Course',
      width: 130,
    },
    {
        field: 'phone',
        headerName: 'Phone No',
        width: 100,
      },
      {
        field: 'email',
        headerName: 'Email Id',
        width: 130,
      },
      {
        field: 'dob',
        headerName: 'DOB',
        width: 200,
      },
      {
        field: '',
        headerName: 'Actions',
        width: 200,
      }
    
  ];
  

  
  const paginationModel = { page: 0, pageSize: 5 };

function Mymaindata() {
    const [user,setuser]=useState([])

    const getalldata = ()=>{
            axios.get("http://localhost:8900/alldata").then((d)=>{
                console.log(d.data);
                setuser(d.data);
            });
    }

    useEffect(()=>{
        getalldata();
    },[])



  return (
    <Paper className='thf' sx={{width: '100%' }}>
    <DataGrid
      rows={user}
      columns={columns}
      getRowId={a => a._id}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10,15]}
      checkboxSelection
      sx={{ border: 0 }}
    />
  </Paper>
  )
}

export default Mymaindata