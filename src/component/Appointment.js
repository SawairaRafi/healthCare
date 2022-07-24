import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { getApplicant } from '../Service/api';

const Appointment = () => {
    const [patientData, setPatientData ] = useState([]);
    useEffect(( )=>{ //method hook
        // getApplicant();
        getPatientDetails();
    },[]);

const getPatientDetails=async()=>{
    const result=await getApplicant();
    setPatientData(result.data);
}
    return (  <div>
        <Navbar />
        <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>PatientID</th>
                </tr>
                </thead>
                <tbody>
            
            {patientData.map(details => (
                <tr>
                    <td>{details.patientName}</td>  
                <td> {details.patientId}</td> 
                </tr>
                  
                ))
            }
            </tbody>
            </table>
        </div>
        <Footer />
    </div>);
}
 
export default Appointment;