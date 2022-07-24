import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
const Home = () => {
  return (
    <div style={{ background: "#F8F9FA" }}>
      <Navbar />
      <Slider />

      <div className="container">
        <div className="row" style={{ height: 30 }}></div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-6 card bg-light ">
            <div className="row">
              {" "}
              <h1 style={{ fontSize: "350%", fontFamily: "revert" }}>
                The Most Important Thing is Your Health
              </h1>
            </div>
            <div className="row">
              <p style={{ fontFamily: "sans-serif" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias esse delectus officia harum laborum, commodi debitis
                quia error eius aliquid unde laboriosam molestiae numquam! Quos
                dolore magnam omnis quae sed?
               
              </p>
              
            </div>
            <div className="row">
              <div className="col-md-9"></div>
              <div className="col-md-3">
                <button className="btn btn-primary mb-5">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img className="card"  src="bg15.webp" alt="" style={{ width: 400 }} />
          </div>
        </div>

        <div className="row" style={{ height: 90 }}></div>
        <div className="row">
          <div className="col-md-12">
            <div className="homeStyle">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  height: "70px",
                }}
              >
                What we do?
              </p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      <div  id="backgrounds2">
        <div className="row" style={{ height: "80px", marginLeft: "20px" }}>
          <div className="col-md-6">
            {" "}
            <h2 className="ms-3">Online Consulation</h2>
          </div>
          <div className="col-md-6">
            <h2 className="ms-3">Medical Services</h2>
          </div>
        </div>

        <div className="row ms-5">
          <div className="col-md-6 col-lg-3  bg-light card" style={{opacity:'0.6',fontWeight:'600'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            laudantium repellendus aperiam optio quam officiis non reiciendis
            unde blanditiis excepturi porro soluta commodi impedit perspiciatis
            quisquam neque, adipisci doloribus veritatis!
            <br></br>
            <button className="btn  mt-3 btn-outline-primary" >Learn More</button>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <img className="card " src="bg16.webp" alt="" style={{ width: "90%"}} />
          </div>
          <div className="col-md-6 col-lg-3  bg-light card" style={{opacity:'0.6',fontWeight:'600'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            laudantium repellendus aperiam optio quam officiis non reiciendis
            unde blanditiis excepturi porro soluta commodi impedit perspiciatis
            quisquam neque, adipisci doloribus veritatis!
            <br></br>
            <button className="btn  mt-3 btn-outline-primary" >Learn More</button>
          </div>
          <div className="col-lg-3 ">
            <img
              src="bg22.webp"
              alt=""
              style={{ width: "90%", height: "200px" }}
            />
          </div>
        </div>

        <div className="row " style={{ height: "80px", marginTop: "30px" }}>
          <div className="col-md-6">
            {" "}
            <h2 className="ms-5">Medical Examination</h2>
          </div>
          <div className="col-md-6">
            <h2 className="ms-5">Labs</h2>
          </div>
        </div>

        <div className="row ms-5">
        <div className="col-md-6 col-lg-3  bg-light card" style={{opacity:'0.6',fontWeight:'600'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            laudantium repellendus aperiam optio quam officiis non reiciendis
            unde blanditiis excepturi porro soluta commodi impedit perspiciatis
            quisquam neque, adipisci doloribus veritatis!
            <br></br>
            <button className="btn  mt-3 btn-outline-primary" >Learn More</button>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <img className="card" src="bg20.webp" alt="" style={{ width: "90%" }} />
          </div>
          <div className="col-md-6 col-lg-3  bg-light card" style={{opacity:'0.6',fontWeight:'600'}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            laudantium repellendus aperiam optio quam officiis non reiciendis
            unde blanditiis excepturi porro soluta commodi impedit perspiciatis
            quisquam neque, adipisci doloribus veritatis!
            <br></br>
            <button className="btn  mt-3 btn-outline-primary" >Learn More</button>
          </div>
          <div className="col-lg-3 ">
            <img className="card" src="image8.jpeg" alt="" style={{ width: "90%" }} />
          </div>
        </div>
        <br></br>
      </div>

      {/*  */}

      {/*  */}

     
        {/*  */}
        <div className="row mb-5 mt-5 text-center" style={{height:'15px'}}><h1>Our Qualified Doctors</h1></div>
        <div className="row" style={{ height: "100px" }}></div>
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-3 " id="staff">
            <div classNam="card" style={{ width: "18rem", height: "400px" }}>
              <img
                src="doc1.png"
                classNam="card-img-top"
                alt="..."
                style={{
                  borderRadius: "500px",
                  marginLeft: "20%",
                  marginTop: "-34%",
                }}
              />
              <div classNam="card-body ">
                <h4 classNam="card-title  ms-5" style={{marginLeft:'29%'}}>Dr. Lloyd Wilson</h4>
                <h5 classNam="  ms-5" style={{marginLeft:'33%'}}>NEUROLOGIST</h5>
                <p className="card-text text-center ms-5">
                   I am an ambitious workaholic, but apart from that,
                  pretty simple person.
                </p>
                <button className=" mt-5 btn btn-primary" style={{marginLeft:'32%'}}>
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
       

        {/*  */}
    
        <div className="col-md-3 ms-5" id="staff">
            <div classNam="card" style={{ width: "18rem", height: "400px" }}>
              <img
                src="doc2.png"
                classNam="card-img-top"
                alt="..."
                style={{
                  borderRadius: "500px",
                  marginLeft: "20%",
                  marginTop: "-34%",
                }}
              />
              <div classNam="card-body ">
              <h4 classNam="card-title  ms-5" style={{marginLeft:'29%'}}>Dr. Henderson</h4>
              <h5 classNam="  ms-5" style={{marginLeft:'25%'}}>OPHTHALMOLOGIST</h5>

                <p className="card-text text-center ms-5">
                I am an ambitious workaholic, but apart from that,
                  pretty simple person.
                </p>
                <button className=" mt-5 btn btn-primary" style={{marginLeft:'32%'}}>
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
      
       
          <div className="col-md-3 ms-5" id="staff">
            <div classNam="card" style={{ width: "18rem", height: "400px" }}>
              <img
                src="doc3.png"
                classNam="card-img-top"
                alt="..."
                style={{
                  borderRadius: "500px",
                  marginLeft: "20%",
                  marginTop: "-38%",
                }}
              />
              <div classNam="card-body ">
              <h4 classNam="card-title  ms-5" style={{marginLeft:'25%'}}>Dr. Rachel Parker</h4>
              <h5 classNam="  ms-5" style={{marginLeft:'40%'}}>DENTIST</h5>
                <p className="card-text text-center ms-5">
                  I am an ambitious workaholic, but apart from that,
                  pretty simple person.
                </p>
                <button className=" mt-5 btn btn-primary" style={{marginLeft:'35%'}}>
                  Go somewhere
                </button>
              </div>
            </div>
          </div>

        </div>
{/*  */}


 <div
        className="row styling"
        style={{ height: "90px", marginTop: "70px" }}
      >
        <div className="col-md-12">
          <h2 align="center">We Provide Best Medical Services</h2>
        </div>
      </div>

      <div className="row" style={{ height: "20px"  }}></div>

      <div className="row " id="backgrounds2"style={{height:"350px"}} >
        <div className="col-md-1 me-5"></div>
        <div className="col-md-3 cardStyle" >
          <div className="card bg-light text-white cardMove">
            <img
              src="bg7.webp"
              className="card-img"
              alt="..."
              style={{ height: "310px" }}
            />
            
            <div className="card-img-overlay"style={{border: '10px solid white'}}>
             
             
            </div>
            <h5 className="text-center card-text mb-3" style={{color:'black'}}>Medical Tests</h5>
          </div>
        </div>

        <div className="col-md-3 cardStyle">
          <div className="card bg-light text-white cardMove" >
            <img
              src="bg13.webp"
              className="card-img"
              alt="..."
              style={{ height: "310px" }}
            />
            <div className="card-img-overlay" style={{border: '10px solid white'}}>
              
             
            </div>
            <h5 className="text-center card-text mb-3"style={{color:'black'}}>Pharmacy</h5>
          </div>
        </div>

        <div className="col-md-3 cardStyle">
          <div className="card bg-light text-white cardMove" >
            <img
              src="bg9.webp"
              className="card-img"
              alt="..."
              style={{ height: "310px" }}
            />
            <div className="card-img-overlay" style={{border: '10px solid white'}}>
              
             
            </div>
            <h5 className="text-center card-text mb-3"style={{color:'black'}}>Online Consultation</h5>
          </div>
        </div>
        {/*  */}
     
      </div>
      <Footer />
    </div>
    
  );
};

export default Home;
