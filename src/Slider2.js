import React from 'react';
import Navbar2 from './Navbar2';

const Slider2 = () => {
    return ( 
        <div>
    
       <div>
       <div className="carousel-inner">
     <img src="main_img1.jpg" className="d-block w-100" alt="..." style={{height:550}}/>
     
     <div className="carousel-caption d-none d-md-block" style={{bottom: "13.25rem",right:" 55%",left:"10%"}}>
     <h1 style={{color:"green",textAlign: "initial",fontSize:"90px,",fontWeight:"900px"}}>Fresh Food</h1>
       <p  style={{color:"black",  textAlign: "justify"}}>   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias esse delectus officia harum laborum, commodi debitis
                quia error eius aliquid unde laboriosam molestiae numquam! Quos
                dolore magnam omnis quae sed?</p>
       <button className='btn  mt-5 btn-outline-success 'style={{opacity:'0.9',borderRadius:'200px',position:"relative",right:"36%",width:"30%"}} >Order Now</button>
     </div>
     
     </div>
     
       </div>
       <div className='col-md-2 position-relative  ' style={{marginLeft:'70%'}}>
      

    
  
   </div> 

       {/* <Footer  /> */}
   </div>
     );
}
 
export default Slider2;