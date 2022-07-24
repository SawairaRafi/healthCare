import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addApplicant } from '../Service/api';

const SignUp = () => {
    const[applicantData,setApplicantData]=useState({  //hooks
        patientName:"",
        patientId:""
    })
// const {studentName,registerationNumber}=applicantData;
const {patientName,patientId}=applicantData;

const handleChange=(e)=>{
    setApplicantData({...applicantData,[e.target.name]:[e.target.value]})
}
const addDetails =async(e)=>{
    e.preventDefault();  
    await addApplicant(applicantData);  
}
    return ( 
    <div>
        <Navbar />
    <div className='col-md-6 position-relative start-50 translate-middle-x mt-5 '>

        <form >
        <label className='mb-2'>Student Name</label>
        <input type="text" className='form-control mb-3' name='patientName' onChange={(e)=>handleChange(e)} />

        <label className='mb-2'>Reg</label>
        <input type="text" className='form-control mb-3' name='patientId' onChange={(e)=>handleChange(e)} />

       <Link to="/UserDashboard"><button className='btn btn-primary form-control' onClick={(e)=>addDetails(e)} >Apply</button></Link> 
        </form>

    </div> 
   
    <Footer />
    </div>);
}
 
export default SignUp;