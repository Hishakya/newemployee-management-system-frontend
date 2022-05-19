import "./AddEmployee.css";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

const AddEmployee = ({ getToken }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://newemployee-management-system-frontend-er2olcmr1-hishakya.vercel.app/app/admin/add",
        //"https://employee-management-system-backend.vercel.app/admin/add",
       // "https://localhost:4000/app/admin/add", wrkng
        // ' https://admin-system-backend.vercel.app/signup',
        // http://localhost:4000/app/employee/signup
        input,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": getToken,
          },
        }
      )
      .then((response) => {
        navigate("/admin/dashboard");
      });
  };
  return (
    <>
      <div className="add-employee">
        <p1>Add Employee</p1>
        <form onSubmit={submitHandler}>

        <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='firstName'   //if u dont right this u cant type
              placeholder='Enter your first name'
              onChange={inputHandler}
            />
            </div>
          
            <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='lastName'   
              placeholder='Enter your last name'
              onChange={inputHandler}
            />
          </div>

          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'   
              placeholder='Enter your e-mail'
              onChange={inputHandler}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              name='password'   
              placeholder='Enter your password'
              onChange={inputHandler}
            />
          </div>
          
          <button type='submit' className='btn btn-block'>Add Employee</button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
  };
};

export default connect(mapStateToProps, null)(AddEmployee);
