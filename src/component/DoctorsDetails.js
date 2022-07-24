import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';
import Sidebar from './Sidebar';

class DoctorsDetails extends Component {
    state = { 
        name: 'Doctors'
     } 
     
    
     
     
     
    render() { 
        return (
            <div>
            
                <AdminNav name={this.state.name} />
                <Sidebar />
               
                {/*  */}
{/*  */}
<div style={{display:'inline-block',width:'81%' }}> 
<div className="row" style={{marginLeft:'4%'}}>
  <div className="col-sm-3 ">
    <div className="card" style={{marginLeft:'-10%' ,width:'100%'}}>
      <div className="card-body"  >
       <Link to='/AddDoctors'style={{textDecoration:'none'}}> <h5 className="card-title text-center" >Add Doctor<h4 className="btn btn-primary text-center" style={{marginLeft:'10%'}} >+</h4></h5></Link>
         
        
      </div>
    </div>
  </div>

  <div className="row" style={{position:'absolute',float:'right',left:'60%',top:'20%',width:'0%' }}>
  <div className="col-sm-3 ">
    <div  style={{marginLeft:'-10%' ,width:'100%'}}>
     {/*  */}
     <div className='col-md-2' >
        <form class="d-flex">
        <input class="form-control me-2"style={{width:'200px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>

        </div>
     {/*  */}
    </div>
  </div>
  </div>
  
{/*  */}

{/*  */}

    </div>
</div>

                {/*  */}
              
  
{/*  */}
          
{/*  */}
  </div>


        );
    }
}
 
export default DoctorsDetails;