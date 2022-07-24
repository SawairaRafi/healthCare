
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <div className=" sticky-top navbar navbar-expand-lg navbar-light bg-light" style={{width:'100%'}}>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="row collapse navbar-collapse" id="navbarSupportedContent">
         
          <div className="col-md-1 ">
              <img src="healthcare1.jpg" alt="health care logo" className='navCss'/>
          </div>
          
        

          <div className="col-md-4">
              <ul className="nav nav-pills" >
                 

                  <li className="nav-item"style={{marginLeft:12}}>
                      <Link to="/" className="nav-link" style={{color:'#153D77'}} >Home</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:12}}>
                      <Link to="/doctors" className="nav-link"  style={{color:'#153D77'}}>Find a Doctor</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:12}}>
                      <Link to="/about" className="nav-link" style={{color:'#153D77'}} >About</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:12}}>
                      <Link to="/contact" className="nav-link" style={{color:'#153D77'}} >Contact</Link>
                    </li>
                
                 

               
                   
                </ul>
                </div>


                {/*  */}
                <div className='col-md-5'>
                  <div className="row">

                  <div className="col-md-2"></div>
                  <div className="col-md-4">
                <ul className="nav ">
                    <li className="nav-item btn btn-primary"id='btnStyle'>
                        <Link to="/appointment" className="nav-link active "  id='navStyle'> Appointment</Link>
                      </li>
                      </ul>
            </div>
            
           <div className="col-md-3" >
              <ul className="nav ">
                <li className="nav-item btn btn-primary" id='btnStyle'>
                    <Link to="/login" className="nav-link active " id='navStyle' style={{textAlign:'center'}} >Login</Link>
                  </li>
              </ul>
                
            </div>
            <div className="col-md-3" >
                <ul className="nav ">
                    <li className="nav-item btn btn-primary" id='btnStyle' >
                        <Link to="/signUp" className="nav-link active" id='navStyle'  style={{textAlign:'center'}}  >Sign Up</Link>
                      </li>
                  </ul>
            </div>
                  </div>
                </div>

       
        <div className='col-md-2' >
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit"  style={{olor:'#153D77'}}>Search</button>
      </form>

        </div>
                {/*  */}

          </div>



          
          </div>



          
);
}
 
export default Navbar;