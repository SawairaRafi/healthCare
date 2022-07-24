import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Login = () => {
    return ( 
        <div >
            <Navbar />
            <div style={{width:'100%',height:'900px',background:'whitesmoke'}}>
            <img className='col-md-1 position-absolute start-50 translate-middle-x mt-10' src='healthcare1.jpg' style={{borderRadius:50,}}/>
    <div className='col-md-4 position-absolute start-50 translate-middle-x ' style={{background:'#153D77',padding:'4%' , marginTop:'100px',border:'1px groove #153D77'}}>
        

    <form>
        <h1 className='text-center' style={{color:"white"}}>Login</h1>
    <label className='mb-2'  style={{color:"white"}}>User Name</label>
    <input type="text" className='form-control mb-3' name='userName'  />

    <label className='mb-2' style={{color:"white"}}>Password</label>
    <input type="password" className='form-control mb-3' name='password'  />

   <Link to="/UserDashboard" ><button className='btn btn-primary form-control' style={{backgroundColor:'white',color:'blue',borderRadius:'50px',marginTop:'30px'}} >Login</button></Link>

    </form>
  
</div>
</div>
<Footer />
</div>);
}
 
export default Login;