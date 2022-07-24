
import './App.css';

import React from 'react';

import Navbar from '../src/component/Navbar';
import Footer from './component/Footer';
import Slider from './component/Slider';
import Home from './component/Home';
import About from './component/About'
import { Routes ,Route } from 'react-router-dom';
import Contact from './component/Contact';
import Doctors from './component/Doctors';
import Appointment from './component/Appointment';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import DoctorsDetails from './component/DoctorsDetails';
import Patients from './component/Patients';
import Payments from './component/Payments';
import BedAllotment from './component/BedAllotment';
import AddDoctors from './component/AddDoctors';
import AddPatients from './component/AddPatients';
import AddPayment from './component/AddPayment';
import UserDashboard from './component/UserDashboard';
import BookAppointment from './component/BookAppointment';
import MyProfile from './component/MyProfile';
import Billing from './component/Billing';
import BillingMethod from './component/BillingMethod';
// import {Route} from 'react-router-dom';
// import { Route } from 'react-router-dom';
import Home2 from './Home2';
import Clockify from './Clockify';
import AdminNav from './component/AdminNav';
import Sidebar from './component/Sidebar';
import Box from './component/Box';



function App() {
  return (
    <div >
        {/* < Navbar /> */}
        {/* <Navbar /> */}
        {/* <AdminNav/>
        <Sidebar/>
        <Box/>
         */}

     {/* <Clockify/> */}

        <Routes>
        
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/doctors" element={ <Doctors />} />
          <Route path="/appointment" element={ <Appointment />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/signUp" element={ <SignUp />} />
          <Route path="/Dashboard" element={ <Dashboard />} />
          <Route path="/DoctorsDetails" element={<DoctorsDetails/>}/>
          <Route path="/Patients" element={<Patients />}/>
          <Route path="/Payments" element={<Payments />}/>
          <Route path="/BedAllotment" element={<BedAllotment />}/>
          <Route path="/AddDoctors" element={<AddDoctors/>}/>
          <Route path="/AddPatients" element={<AddPatients/>}/>
          <Route path="/AddPayment" element={<AddPayment/>}/>
          <Route path= "/UserDashboard" element={<UserDashboard />}/>
          <Route path="/BookAppointment" element={<BookAppointment/>}/>
          <Route path="/Profile" element={<MyProfile/>}/>
          <Route path="/Billing" element={<Billing/>}/>
          <Route path="/BillingMethod" element={<BillingMethod/>}/>
          

        </Routes>
    
   
   
      
      </div>
        
    
   
    
   
  );
}


export default App;
