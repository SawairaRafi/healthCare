import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';
import { patientData } from '../patientData';
import Sidebar from './Sidebar';

class Patients extends Component {
    state = { 
        name: 'Patients',
        patientDetails: patientData()
     } 

     handleDelete = (id) => {
        const filter = this.state.patientDetails.filter(pd => pd.id != id);
        this.setState({
            patientDetails: filter
        })
    }

    render() { 
        return (
            <div>
            
                <AdminNav name={this.state.name} />
                <Sidebar />
                <div style={{display:'inline-block',width:'81%' ,marginLeft:'2%'}}>
                <div className="row" >
  <div className="col-sm-3 ">
    <div className="card">
      <div className="card-body"  >
       <Link to='/AddPatients'style={{textDecoration:'none'}}> <h5 className="card-title text-center" >Add Patients<h5 className="btn btn-primary text-center" style={{marginLeft:'10%'}} >+</h5></h5></Link>
         
        
      </div>
    </div>
  </div>
   {/* <div className="row" style={{position:'absolute',float:'right',left:'60%',top:'20%',width:'0%' }}> */}
   <div className="col-sm-3 ms-5 " style={{position:'absolute',left:'60%'}}>
    <div >
     {/*  */}
     <div className='col-md-2' >
        <form class="d-flex">
        <input class="form-control me-2"style={{width:'200px'}} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>

        </div>
     {/*  */}
    </div></div>
    {/* </div> */}

                {/*  */}
<div className='row mb-5' ></div>
                <div>
                             
                             <div className='row mb-3 card ' style={{flexDirection:'row',background:'#153D77',color:'white'}}>
                                 <div className='col-md-1 text-center' style={{borderRight:'5px solid white'}}>
                                      <h5>Id</h5>
                                </div>
                             
                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h5>Name</h5>
                                </div>

                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h5>Password</h5>
                                </div>

                                <div className='col-md-3  text-center'style={{borderRight:'5px solid white'}}>
                                    <h5>Email</h5>
                                </div>

                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h5>Blood Group</h5>
                                </div>

                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h5>Actions</h5>
                                </div>

                                </div>
                          
                        </div>
                {/*  */}
               <div >

               {
                   this.state.patientDetails.map(products => 
                    
                        <div className='mb-3'>
                             
                             <div className='row bg-light card' id="staffs" style={{flexDirection:'row'}}>
                                 <div className='col-md-1  text-center'style={{borderRight:'5px solid white'}}>
                                      <h6>{products.id}</h6>
                                </div>
                             
                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h6>{products.name}</h6>
                                </div>

                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h6>{products.password}</h6>
                                </div>

                                <div className='col-md-3  text-center'style={{borderRight:'5px solid white'}}>
                                    <h6>{products.email}</h6>
                                </div>

                                <div className='col-md-2  text-center'style={{borderRight:'5px solid white'}}>
                                    <h6>{products.bloodGroup}</h6>
                                </div>

                                <div className='col-md-2  text-center'>
                                <button className='btn btn-primary me-1' onClick={() => this.handleEdit(products.id)}>Edit</button>
                                <button className='btn btn-primary ' onClick={() => this.handleDelete(products.id)}>Delete</button>
                                
                                </div>
                                

                                </div>
                          
                        </div>
                    )
               }

            </div>
            </div>
                </div>
                {/*  */}
               
  {/*  */}
  

 
            </div>
        );
    }
}
 
export default Patients;