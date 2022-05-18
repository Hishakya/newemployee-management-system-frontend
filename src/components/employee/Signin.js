import { useState } from "react";
import { FaSignInAlt } from 'react-icons/fa'
import axios from "axios";
import "./signin.css"
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

import { connect } from "react-redux";
import { setEmployee } from "../../redux/signin/signin.action";

const Signin = ({ setEmployee }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
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
        // "https://employee-management-system-backend.vercel.app/employee/signin",
        input
      )
      .then((response) => {
        console.log(typeof response.data);
        setEmployee(response.data);
      })
      .then(() => {
        navigate("/employee/dashboard");
      });
  };
  return (
    <>
      <div>
      < section className='heading1'>
        <p><FaSignInAlt /> Employee Sign In</p>
      </section>
      <section className='form'>
        <form onSubmit={submitHandler}>

        <div className='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'   
              placeholder='Enter your email'
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

          <button type='submit' className='btn btn-block'>Sign In</button>
          <p>Go Back <Link to="/" > <p1>Dashboard</p1> </Link></p>
        </form>
        </section>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmployee: (employee) => dispatch(setEmployee(employee)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
