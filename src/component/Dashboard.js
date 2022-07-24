import React, { Component } from 'react';
import { useState } from 'react';

import AdminNav from './AdminNav';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  
    state = { 
        name: 'Dashboard'
     } 

    
    render() { 
        return (
            <div>
            
                <AdminNav name={this.state.name} />
                <Sidebar />
                {/*  */}
                <div style={{display:'inline-block',width:'81%' ,marginLeft:'2%'}}>

  <div className="row">
  
  <div className="col-sm-2 ">
    <div className="card acard">
      <div className="card-body " >
        <h5 className="card-title text-center" >Total Patients</h5>
        
        <h1 className="btn btn-primary text-center" style={{marginLeft:'24%'}}>692000</h1>
      </div>
    </div>
  </div>
  <div className="col-sm-2 " >
    <div className="card acard">
      <div className="card-body  ">
        <h5 className="card-title text-center"> Doctors</h5>
       
        <h1 className="btn btn-primary text-center" style={{marginLeft:'30%'}}>78</h1>
      </div>
    </div>
  </div>
  <div className="col-sm-2 " >
    <div className="card acard">
      <div className="card-body  ">
        <h5 className="card-title text-center"> Beds</h5>
       
        <h1 className="btn btn-primary text-center" style={{marginLeft:'30%'}}>78</h1>
      </div>
    </div>
  </div>
<div className='col-md-1'></div>
  <div className="col-sm-4 "  >
    <div className="card "style={{height:'500px',borderRadius:'30px'}}>
      <div className="card-body ">
        <h5 className="card-title text-center">Profile</h5>
       
       <img src='adminImage.png' style={{margin:'1% 31% 1% 30%' ,borderRadius:'100px'}}/>
       <br></br>
       <div className='row'>
           <div className='col-sm-12' style={{margin:'10% 31% 1% 10%'}}>
               <h6>User Name:</h6>
           </div>
       </div>

       <div className='row' style={{margin:'10% 31% 1% 9%'}}>
           <div className='col-sm-12'>
               <h6>Password:</h6>
           </div>
       </div>

       <div className='row'>
           <div className='col-sm-12' style={{margin:'10% 31% 1% 10%'}}>
               <h6>User Name:</h6>
           </div>
       </div>
      </div>
    </div>
  </div>
</div>


                </div>
            
               
                {/*  */}

                {/*  */}

      
                {/*  */}
            </div>
        );
    }
}
 
export default Dashboard;