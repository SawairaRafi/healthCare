import React, { Component } from "react";

import AdminNav from "./AdminNav";
import Sidebar from "./Sidebar";

class AddDoctors extends Component {
  state = {
    name: "Add Doctors",
  };

  render() {
    return (
      <div>
        <AdminNav name={this.state.name} />
        <Sidebar />

        {/*  */}
        {/*  */}

        {/*  */}
        <div
          className="row"
          style={{
            position: "absolute",
            float: "right",
            left: "20%",
            top: "20%",
            width: "90%",
          }}
        >
          
          

          {/*  */}
          <div
            className="col-sm-3"
            style={{ position: "absolute", left: "100px", color:'#153D77',fontWeight:'600' }}
          >
            <form>
              <div className="row" style={{width:'800px' ,backgroundColor:'whitesmoke',borderRadius:'20px'}}>
                <div className="col-md-5">  
                <div className="mb-3">
                <label for="exampleInputName" className="form-label">
                  Name
                </label>
                <input type="Text" className="form-control" id="exampleInputName" />
              </div>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label">
                  User_ID
                </label>
                <input type="Text" className="form-control" id="exampleInputName" />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputCnic" className="form-label">
                  CNIC
                </label>
                <input type="Text" className="form-control" id="exampleInputCnic" />
              </div>
              <div className="mb-3">
                <label for="exampleInputNumber" className="form-label">
                 Phone Number
                </label>
                <input type="text" className="form-control" id="exampleInputNumber" />
              </div>
             
                 </div>

                 <div className="col-md-2"></div>

                 <div className="col-md-5">

                 <div className="mb-3">
                <label for="exampleInputDepartment" className="form-label">
                  Department
                </label>
                <input type="Text" className="form-control" id="exampleInputDepartment" />
              </div>
              <div className="mb-3">
                <label for="exampleInputImage" className="form-label">
                 Upload Image
                </label>
                <input type="file" className="form-control" id="exampleInputImage" />
              </div>
              <div className="mb-3">
                <label for="exampleInputGender" className="form-label">
                  Gender
                </label>
                <br></br>
               Male: <input
                  type="radio"
                  className="me-5"
                  id="exampleInputGender"
                  name="gender"
                 
                />
                Female: <input
                  type="radio"
                  name="gender"
                  id="exampleInputGender"
                 
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputDOB" className="form-label">
                  DOB
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDOB"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputJoin" className="form-label">
                  Joining Month
                </label>
                <input type="month" className="form-control" id="exampleInputJoin" />
              </div>
              <div className="mb-3">
                <label for="exampleInputTime" className="form-label">
                 Timings
                </label>
                <br></br>
                Morning: <input type="checkbox" className="me-5"  id="exampleInputTime" />
                Evening: <input type="checkbox"  id="exampleInputTime" />
              </div>
              <button type="submit" className="btn btn-dark ms-5  mb-2 mt-2 w-50 ">
                Submit
              </button>

                 </div>
              </div>
             


            </form>
          </div>
          {/*  */}
        </div>
       
      </div>
    );
  }
}

export default AddDoctors;
