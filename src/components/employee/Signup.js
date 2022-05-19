import { useState } from "react";
import { FaUser } from 'react-icons/fa'
import axios from "axios";
import {Link} from 'react-router-dom'
const Signup = () => {
  const [alert, setAlert] = useState("");
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
        `https://employee-management-system-backend-iota.vercel.app/app/employee/signup`,
        //`https://newemployee-management-system-frontend-er2olcmr1-hishakya.vercel.app/app/employee/signup`,
       // "https://employee-management-system-backend.vercel.app/employee/signup",
       //"http://localhost:4000/app/employee/signup",
        input
      )
      .then((response) => setAlert(response.data));
  };
  return (
    <>
      <div>
        
        < section className='heading1'>
        <p><FaUser /> Employee Sign Up</p>
      </section>
        <form onSubmit={submitHandler}>

        <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='firstName'   
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
          
          <button type='submit' className='btn btn-block'>
              Sign UP
            </button>
            <p>Already have an account ? <Link to="/signin" > <p1>Sign In</p1> </Link></p>
          {alert && (
            <div className="alert-message">
              <p>{alert}</p>
              <p>
                <span
                  onClick={() => setAlert("")}
                  style={{ cursor: "pointer" }}
                >
                  &#10005;
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Signup;
