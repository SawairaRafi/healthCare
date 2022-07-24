import React from 'react';

const Slider = () => {
    return ( 
        <div>

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="bg11.webp" className="d-block w-100" alt="..." style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='slider animations' style={{marginLeft:'-20px'}}>WELCOME TO HEALTH CARE</h1>
        <p></p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="image11.jpg" className="d-block w-100" alt="..." style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="image1.jpeg" className="d-block w-100" alt="..." style={{height:600}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
     );
}
 
export default Slider;