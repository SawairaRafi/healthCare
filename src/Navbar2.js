
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar2 = () => {
    return (
      <div className=" sticky-top navbar navbar-expand-lg  " style={{width:'100%',background:"#F1F7F7"}}>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="row collapse navbar-collapse" id="navbarSupportedContent">
         
          <div className="col-md-2 ">
              <img src="logoexam.png" alt="health care logo" className='navCss'/>
          </div>
          
          <div className="col-md-2 ">
             
          </div>
          

          <div className="col-md-5">
              <ul className="nav nav-pills" >
                 

                  <li className="nav-item"style={{marginLeft:12}}>
                      <Link to="/" className="nav-link " id="Navhovers" style={{color:'#153D77'}} >Home</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:12}}>
                      <Link to="/doctors" className="nav-link"id="Navhovers"  style={{color:'#153D77'}}>About</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:12}}>
                      <Link to="/about" className="nav-link"id="Navhovers" style={{color:'#153D77'}} >Menu</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:12}}>
                      <Link to="/contact" className="nav-link" id="Navhovers" style={{color:'#153D77'}} >Testimonials</Link>
                    </li>
                
                 

               
                   
                </ul>
                </div>


             

          </div>



          
          </div>



          
);
}
 
export default Navbar2;