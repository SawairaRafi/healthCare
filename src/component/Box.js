import React, { Component } from 'react';
import { FaHome ,FaUser ,FaStethoscope,FaBed,FaMoneyBill, FaClock,FaCalendar,FaBuromobelexperte,FaAndroid,FaApple,FaWindows} from "react-icons/fa";
const Box = () => {
    return ( 
<div>
    <div style={{    position: "absolute",top: "10%",  left: "20%",width:"70%"}}>
    <nav className="navbar navbar-light bg-light justify-content-between" style={{height:"80px"}}>
  <form className="form-inline" style={{width:"50%"}}>
    
    <input className="form-control ms-3" type="search" placeholder="Search" aria-label="Search"/>
    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>
    </div>




        <div style={{    position: "absolute",top: "15%",  left: "41%", display: "flex",}}>
{/*  */}

       {/*  */}
    <div className="row mt-5">
          
          <div className="col-md-3 ">
            <div className="card" style={{ width: "25rem", height: "400px" }}>
              <img
                src="clock2.png"
                className="card-img-top"
                alt="..."
                style={{
                  borderRadius: "500px",
                 height:"200px",
                 width:"70%",
                 padding:"1%",
                 marginLeft:"15%",
                }}
              />
              <div className="card-body ">
                <h4 className="card-title  " style={{marginLeft:'22%'}}>Let's Start Tracking</h4>
                {/* <h5  style={{marginLeft:'26%'}}><Header /></h5> */}
               <h6 style={{textAlign:"center", marginTop:"3%",color:"grey"}}>Install Clockify and Track Time anywhere</h6>
                {/* <button className=" mt-5 btn btn-primary ms-5" >
                  Go somewhere
                </button> */}
                <FaApple style={{margin:"2% 0% 2% 25%",height:"50px"}}></FaApple>
                <FaWindows style={{margin:"2% 0% 2% 10%",height:"50px"}}/>
                <FaUser style={{margin:"2% 0% 2% 10%",height:"50px"}}/>
                <FaClock style={{margin:"2% 0% 2% 10%",height:"50px"}}/>

              </div>
            </div>
          </div>
       

        {/*  */}
    
     
        </div>

        </div></div>

     );
}
 
export default Box;