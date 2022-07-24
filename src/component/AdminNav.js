
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff,FaSearchengin} from "react-icons/fa";
const AdminNav = (props) => {
    return (
      <div   style={{width:'100%',backgroundColor:'##FFFFFF', marginTop: '1px',
      paddingTop: '1%'}}>
         
      <div className="row" style={{borderBottom:'1px groove white'}}>
         
          <div className="col-md-1">
              <img src="clock.png" alt="clockify logo" className='navCss'/></div>
              <div className='col-md-8 text-center' style={{color:'white'}}><h1>{props.name}</h1></div>
              <div className="col-md-3">
              <ul className="nav nav-pills" >
                 

                  <li className="nav-item"style={{marginLeft:40 }}>
                      <Link to="/home" className="nav-link"  style={{color:'black'}} ><FaSearchengin className='me-2'/>Settings</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:40}}>
                      <Link to="/doctors" className="nav-link"  style={{color:'black'}}><FaPowerOff className='me-2'/>Logout</Link>
                    </li>
                   
                </ul>
                </div>


              </div>
         

              
          </div>
          
        

          


               


        
               

    



          
     
          
);
}
 
export default AdminNav;