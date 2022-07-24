import React, { Component } from 'react';

import AdminNav from './AdminNav';
import Sidebar from './Sidebar';

class BedAllotment extends Component {
    state = { 
        name: 'Bed Allotment'
     } 
    render() { 
        return (
            <div>
            
            <AdminNav name={this.state.name} />
            <Sidebar />
            <div style={{display:'inline-block',width:'81%' ,marginLeft:'2%'}}>

            <div className="row" >
<div className="col-sm-3 ">
<div className="card" >
  <div className="card-body"  >
   {/* <Link to='/AddPayment'style={{textDecoration:'none'}}> <h5 className="card-title text-center" >Add Payment<h4 className="btn btn-primary text-center" style={{marginLeft:'10%'}} >+</h4></h5></Link> */}
     Bed
    
  </div>
</div>
</div>
{/*  */}


<div className="row" style={{position:'absolute',left:'70%' }}>
<div className="col-sm-3 ">
<div  style={{marginLeft:'-10%' ,width:'60%'}}>
 {/*  */}
 <div className='col-md-2' >
    <form class="d-flex">
    <input class="form-control me-2"style={{width:'200px'}} type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-primary" type="submit">Search</button>
  </form>

    </div>
 {/*  */}
</div></div></div>

            {/*  */}
        </div>

            </div>
           
        </div>);
    }
}
 
export default BedAllotment;