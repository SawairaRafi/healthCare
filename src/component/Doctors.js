import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Doctors = () => {
    return (  
        <div>
         <Navbar />
        <div>
        <div className="carousel-inner position-absolute ">
      <img src="bg8.webp" className="d-block w-100" alt="..." style={{height:550}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
        <button className='btn btn-primary form-control'style={{background:'#0F0C29',opacity:'0.9'}} >Find a Doctor</button>
      </div></div>
        </div>
        <div className='col-md-2 position-relative  ' style={{marginLeft:'70%',marginTop:'35%'}}>
       

     
   
    </div> 
    <br></br>
        <Footer  />
    </div>
       
       );
}
 
export default Doctors;