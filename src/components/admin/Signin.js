import { useState } from "react";
import { FaSignInAlt } from 'react-icons/fa'
import axios from "axios";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { setAdmin, setToken } from "../../redux/signin/signin.action";

const AddSignin = ({ setToken, setAdmin }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://newemployee-management-system-frontend-er2olcmr1-hishakya.vercel.app/app/admin/signin`,
        // "https://employee-management-system-backend.vercel.app/admin/signin",
        //"https://localhost:4000/app/admin/signin",
        input
      )
      .then((response) => {
        setToken(response.data.token);
        setAdmin(response.data.admin);
        navigate(`/admin/dashboard`);
      });
  };
  return (
    <>
      <div>
        {/* <h2><FaSignInAlt /> Admin Sign In</h2> */}
        < section className='heading1'>
        <p><FaSignInAlt /> Admin Sign In</p>
      </section>
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
          <p>Don't have an account? <Link to="/signup" ><p1>Sign Up</p1>  </Link></p>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
    setAdmin: (admin) => dispatch(setAdmin(admin)),
  };
};

export default connect(null, mapDispatchToProps)(AddSignin);
