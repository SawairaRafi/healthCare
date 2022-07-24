import React from "react";
import { Link } from "react-router-dom";
import { FaHome ,FaUser ,FaClipboardList,FaBookMedical,FaWallet,FaMoneyBill,FaPowerOff} from "react-icons/fa";
const UserDashboard = () => {
    return ( 
        <div>
   
 

<div className="row" id="rows"style={{backgroundColor:'#153D77',height:'10px'}}>
    <div className="col-md-10">
       <h3 className="mt-1 ms-5 " style={{color:'white'}}></h3>
    </div>
    <div className="col-md-2">
    <nav className="navbar navbar-light   mb-5" >
   
   
    </nav>
    </div>
</div>

<div className="row bg-light"id="rows" style={{height:'600px'}}>
<div className="col-md-2" style={{border:'2px groove white'}}>
<img src='adminImage.png' style={{margin:'0% 10% 1% 20%' ,borderRadius:'100px'}}/>
<ul class="nav flex-column ms-2">
    <li className="text-center"><h3>User Name</h3></li>
    <li class="nav-item mb-1 mt-2">
    <Link to="/UserDashboard" className='nav-link'id='alink'><h6   style={{color:'#153D77'}}><FaHome className="me-2"/>Dashboard</h6></Link>
  </li>
  <li class="nav-item mb-3 mt-2">
    <Link to="/Profile" className="nav-link " id='alink' style={{color:'#153D77'}} ><h6><FaUser className="me-2"/>My Profile</h6></Link>
  </li>
  {/* <li class="nav-item mb-3 ">
    <a class="nav-link" href="#" style={{color:'#153D77'}}><FaClipboardList className="me-2"/>History</a>
  </li> */}
  <li class="nav-item mb-3 ">
    <Link to="/BookAppointment" className='nav-link 'id='alink'><h6   style={{color:'#153D77'}}><FaBookMedical className="me-1"/>Book Appointment</h6></Link>
  </li>
  <li class="nav-item mb-3 ">
    <Link to="/Billing"  className='nav-link 'id='alink' style={{color:'#153D77'}}><h6><FaMoneyBill className="me-1"/>Billing </h6></Link>
  </li>

  <li class="nav-item mb-3 ">
    <Link to="/"  className='nav-link 'id='alink' style={{color:'#153D77'}}><h6><FaPowerOff className="me-1"/>Logout</h6></Link>
  </li>

</ul>
</div>
    <div className="col-md-10  " >
        <div className="row" id="rows">
            <div className="col-md-12" style={{height:'200px',backgroundColor:'#153D77',borderBottomRightRadius:'1000px'}}><h1 className="ms-5" style={{marginTop:'40px',color:"white"}}>Welcome back Linda </h1>
<h5 className="ms-5" style={{color:'white'}}>You have 25 new notifications</h5></div>
            <div className="col-md-12 bg-light position-relative" style={{height:'300px',marginTop:'-5%',borderTopLeftRadius:'90px',borderTop:'2px groove white'}} >
            <div className="row" id="rows">

                 <div className="col-sm-3 ">
        <div className="card acard mt-5 ms-5"  style={{background:'#153D77',borderRadius:'20px'}}>
          <div className="card-body " >
            <h5 className="card-title text-center" style={{color:'white'}} ><FaClipboardList/>Appointments</h5>
            
            <h1 className="btn btn-light text-center" style={{marginLeft:'35%'}}>0</h1>
          </div>
        </div>
      </div> 
      
      <div className="col-sm-3 ">
        <div className="card acard mt-5 ms-5" style={{background:'#153D77',borderRadius:'20px'}}>
          <div className="card-body " >
            <h5 className="card-title text-center"style={{color:'white'}} ><FaWallet className="me-2"/>Wallet</h5>
            
            <h1 className="btn btn-light text-center" style={{marginLeft:'28%'}}>Rs 200</h1>
          </div>
        </div>
      </div>
    
      <div className="col-sm-3 ">
        <div className="card acard mt-5 ms-5" style={{background:'#153D77',borderRadius:'20px'}}>
          <div className="card-body " >
            <h5 className="card-title text-center"style={{color:'white'}} >Medical Reports</h5>
            
            <h1 className="btn btn-light text-center" style={{marginLeft:'35%'}}>5</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-3 ">
        <div className="" style={{borderRadius:'20px',marginTop:'-48%'}}>
         
        <img src="doc4.webp" style={{width:'60%' }}/>
        
        </div>
      </div>

     
<h4 className="card-title mt-5 "  style={{fontWeight:'600'}}>Schedule</h4>
<div className="row mt-3 w-75 ms-3 card"id='staff' style={{fontWeight:'600',flexDirection:'row'}}>
  <div className="col-md-3 card-title  ">Cardiologist</div>
  <div className="col-md-3">OPD 1</div>
  <div className="col-md-3">Wed</div>
  <div className="col-md-3">9:00 am</div>
</div>

<div className="row card mt-3 w-75 ms-3" id='staff' style={{fontWeight:'600',flexDirection:'row'}}>
  <div className="col-md-3 card-title   ">Neurologist</div>
  <div className="col-md-3">OPD 1</div>
  <div className="col-md-3">Wed</div>
  <div className="col-md-3">9:00 am</div>
</div>

<div className="row card mt-3 w-75 ms-3" id='staff' style={{fontWeight:'600',flexDirection:'row'}}>
  <div className="col-md-3 card-title   ">psychologist</div>
  <div className="col-md-3">OPD 1</div>
  <div className="col-md-3">Wed</div>
  <div className="col-md-3">9:00 am</div>
</div>

    </div>
            </div>
        </div>

    </div>
</div>




</div>
     );
}
 
export default UserDashboard;