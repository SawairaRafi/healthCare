import React from "react";
import { FaHome ,FaUser ,FaClipboardList,FaBookMedical,FaBell,FaMoneyBill,FaPowerOff} from "react-icons/fa";
import { Link } from "react-router-dom";
const MyProfile = () => {
    return ( 
        <div>
   

   <div className="row"style={{backgroundColor:'#153D77',height:'10px'}}>
    <div className="col-md-8">
       <h3 className="mt-1 ms-5 " style={{color:'white'}}></h3>
    </div>
    <div className="col-md-2">
    <nav className="navbar navbar-light   mb-5" >
   
   
    </nav>
    </div>
    <div className="col-md-2"><img src="user.webp" style={{width:'80%',marginTop:'100%'}}/></div>
</div>


<div className="row bg-light" style={{height:'600px'}}>
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

<div className="col-md-10">

<div className="row"style={{backgroundColor:'#153D77' }}>
    <div className="col-md-10  " >
<h1 className="ms-5" style={{color:"white"}}><FaUser className="me-2"/>Profile</h1>

    </div>
    <div className="col-md-2" ><FaBell className="mt-3" style={{color:'white',height:'20px',width:'50px'}}/>
    <FaUser className="mt-3" style={{color:'white',height:'20px',width:'50px'}}/></div>
    
</div>



<div  className='col-md-6 position-relative start-50 translate-middle-x mt-5 '>

<form class="row g-3 card" style={{flexDirection:'row'}}>
<div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Username</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="username"/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Phone</label>
    <input type="Number" class="form-control" id="inputAddress" placeholder="042-xxxxx"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-6">
   
  </div>
  <div class="col-6">
    <button type="submit" class="btn btn-outline-primary " style={{marginLeft:'52%'}}>Save Changes</button>
  </div>
</form>
</div>

</div>
</div>

{/*  */}


</div>
     );
}
 
export default MyProfile;