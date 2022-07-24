import React from "react";
// import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Slider2 from "./Slider2";
const Home2 = () => {
  return (
    <div style={{ background: "#F8F9FA" }}>
      <Navbar2 />
      <Slider2 />

      <div style={{backgroundColor:"whitesmoke"}}>
        <div className="row" style={{ height: 30 }}></div>
        <div className="row">
          <div className="col-md-2"></div>
        <div className="col-md-4 ms-5">
            <img className="card"  src="main_img2.jpg" alt="" style={{ width: 400 }} />
          </div>
          
          <div className="col-md-4  ">
            
            <div className="row">
             <div className="col-md-12 ">
              <div className="row" style={{ height: 30 }}></div>
             </div>
          

              
            </div>
          
            <div className="row card bg-light"style={{right:"30%",top:"5%",borderRadius:"20px",textAlign:"center"}}>
              <div className="col-md-12 ">
          <h5 style={{  fontFamily: "revert", color:"green" }}>
                We Create Delecious Memories for you
              </h5>
          </div>
              <div className="col-md-4"></div>
              <p style={{ fontFamily: "sans-serif" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias esse delectus officia harum laborum, commodi debitis
                quia error eius aliquid unde laboriosam molestiae numquam! Quos
                dolore magnam omnis quae sed?
               
              </p>
            </div>
          </div>
          
        </div>

        <div className="row" style={{ height: 90 }}></div>
        <div className="row">
        
        </div>

        {/*  */}
      </div>

      <div  id="backgrounds3">
        <div className="card container">
        <div className="row" style={{ height: "30%", marginLeft: "20px" }}>
        <div className="col-md-12">
            <div className="homeStyle">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  height: "70px",
                }}
              >
                What will you eat today
              </p>
            </div>
          </div>
          <div className="row"> 
          <div className="col-md-12">
           <p style={{color:"black"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            laudantium repellendus aperiam optio quam officiis non reiciendisLorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            laudantium repellendus aperiam optio quam officiis non reiciendis
            </p>
            
          </div></div>
         
          
        </div>
        {/*  */}

        {/*  */}

        <div className="row ms-5">
          <div className="col-md-6 col-lg-3  " style={{fontWeight:'600'}}>
          <img className="card " src="img1.jpg" alt="" style={{ width: "90%"}} />
            <br></br>
           
          </div>
          <div className="col-md-6 col-lg-3 ">
            <img className="card " src="img3.jpg" alt="" style={{ width: "90%",height:"220px"}} />
          </div>
          <div className="col-md-6 col-lg-3  " style={{fontWeight:'600'}}>
          <img className="card " src="img2.jpg" alt="" style={{ width: "90%",height:"220px"}} />
            <br></br>
            
          </div>
          <div className="col-lg-3 ">
            <img
            className="card "
              src="img4.jpg"
              alt=""
              style={{ width: "90%" }}
            />
          </div>
        </div>

        

       
        <br></br>

        <div className="row ms-5">
          <div className="col-md-6 col-lg-3  " style={{fontWeight:'600'}}>
          <img className="card " src="img1.jpg" alt="" style={{ width: "90%"}} />
            <br></br>
           
          </div>
          <div className="col-md-6 col-lg-3 ">
            <img className="card " src="img3.jpg" alt="" style={{ width: "90%",height:"220px"}} />
          </div>
          <div className="col-md-6 col-lg-3  " style={{fontWeight:'600'}}>
          <img className="card " src="img2.jpg" alt="" style={{ width: "90%",height:"220px"}} />
            <br></br>
            
          </div>
          <div className="col-lg-3 ">
            <img
            className="card "
              src="img4.jpg"
              alt=""
              style={{ width: "90%" }}
            />
          </div>
        </div>

        

       
        <br></br>
        </div>
      </div>

     


 <div
        className="row styling"
        style={{ height: "90px", marginTop: "70px" }}
      >
       
      </div>

      <div className="row" style={{ height: "20px"  }}></div>

      <div className="row " style={{height:"350px"}} >
        <div className="col-md-1 me-5"></div>
        <div className="col-md-3 cardStyle" >
          <div className="card bg-light text-white cardMove">
            <img
              src="img1.jpg"
              className="card-img"
              alt="..."
              style={{ height: "310px" }}
            />
            
            <div className="card-img-overlay"style={{border: '10px solid white'}}>
             
             
            </div>
            {/* <h5 className="text-center card-text mb-3" style={{color:'black'}}>Medical Tests</h5> */}
          </div>
        </div>

        <div className="col-md-3 cardStyle">
          <div className="card bg-light text-white cardMove" >
            <img
              src="img1.jpg"
              className="card-img"
              alt="..."
              style={{ height: "310px" }}
            />
            <div className="card-img-overlay" style={{border: '10px solid white'}}>
              
             
            </div>
            {/* <h5 className="text-center card-text mb-3"style={{color:'black'}}>Pharmacy</h5> */}
          </div>
        </div>

        <div className="col-md-3 cardStyle">
          <div className="card bg-light text-white cardMove" >
            <img
              src="img1.jpg"
              className="card-img"
              alt="..."
              style={{ height: "310px" }}
            />
            <div className="card-img-overlay" style={{border: '10px solid white'}}>
              
             
            </div>
            {/* <h5 className="text-center card-text mb-3"style={{color:'black'}}>Online Consultation</h5> */}
          </div>
        </div>
        {/*  */}
     
      </div>
      {/* <Footer /> */}
    </div>
    
  );
};

export default Home2;
