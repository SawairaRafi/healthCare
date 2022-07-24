import React from "react";
import { Link } from "react-router-dom";
import { FaHome ,FaUser ,FaStethoscope,FaBed,FaMoneyBill, FaClock,FaCalendar,FaBuromobelexperte} from "react-icons/fa";
const Sidebar = () => {
    return ( 
        <div  id="sd" style={{backgroundColor:'#F2F6F8',width:'17%',color:'black'}}>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className='row'>
            <div className='col-md-12 ' style={{height:'700px'}} >
            <div className='row' >
                    <div className='col-md-12  ' style={{height:'50px'}}></div>
                </div>
                <div className='row a-sidebar' style={{paddingTop:'1%' ,margin:'0% 5% 5% 5%'}} >
                    <div className='col-md-12  ' style={{height:'50px',marginLeft:'10px'}}>
                        <Link to='/Dashboard' className='nav-link 'id='alink'><FaClock className="me-2"/>Time Tracker </Link></div>
                </div>
                <div className='row a-sidebar' style={{paddingTop:'1%' ,margin:'0% 5% 5% 5%'}}>
                    <div className='col-md-12  ' style={{height:'50px',marginLeft:'10px'}}>
                    <Link to='/DoctorsDetails' className='nav-link' id='alink'><FaCalendar className="me-2"/>Calender </Link></div>
                </div>
                <div className='row a-sidebar' style={{paddingTop:'1%' ,margin:'0% 5% 5% 5%'}}>
                    <div className='col-md-12 ' style={{height:'50px',marginLeft:'10px'}}><Link to='/Patients' className='nav-link' id='alink'><FaBuromobelexperte className="me-2"/>Dashboard</Link></div>
                </div>
                <div className='row a-sidebar' style={{paddingTop:'1%' ,margin:'0% 5% 5% 5%'}}>
                    <div className='col-md-12 ' style={{height:'50px',marginLeft:'10px' }}><Link to='/Payments' className='nav-link' id='alink'><FaUser className="me-2"/>Reports </Link></div>
                </div>
                <div className='row a-sidebar'style={{paddingTop:'1%' ,margin:'0% 5% 5% 5%'}} >
                    <div className='col-md-12  ' style={{height:'50px',marginLeft:'10px'}}><Link to='/BedAllotment' className='nav-link' id='alink'><FaUser className="me-2"/>Projects</Link></div>
                </div>
            </div>
            <div className='col-md-10' style={{backgroundColor:'white'}}></div>
        </div>
        
        </div> );
}
 
export default Sidebar;