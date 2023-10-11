import React, { useState } from "react";
import Navbarmenu from "../Components/Navbarmenu";
import "./css/Register.css";

const Register = () => {
  
  return (
    <div>
      <Navbarmenu />
      <div className="Form">
        <div className="content1">
          <h2>Registration Form</h2>
          <br />
          <div className="coloumn">
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="N1"
              id="N1"
              placeholder="Enter name"
              required
            />
            <br />
            <br />
            <label>Register Number:</label>
            <br />
            <input
              type="text"
              name="R1"
              id="R1"
              placeholder="Enter Regno"
              required
              minLength="8"
              maxLength="8"
            />
            <br />
            <br />
            <label>Phone Number:</label>
            <br />
            <input
              type="text"
              name="P1"
              id="P1"
              placeholder="Enter Phone Number"
              minLength="10"
              maxLength="10"
              required
            />
            <br />
            <br />
            <label>Email ID:</label>
            <br />
            <input
              type="text"
              name="M1"
              id="M1"
              placeholder="Enter Mail Id"
              required
            />
            <br />
            <br />
          </div>
          <button type="submit" value="submit" className="btn">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;