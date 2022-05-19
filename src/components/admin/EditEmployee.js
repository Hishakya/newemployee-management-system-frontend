import "./EditEmployee.css";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

const EditEmployee = ({ getToken }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({ firstName: "", lastName: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .put(
        `https://newemployee-management-system-frontend-er2olcmr1-hishakya.vercel.app/app/admin/edit/${id}`,
        // `https://employee-management-system-backend.vercel.app/admin/edit/${id}`,
        // "https://localhost:4000/app/admin/edit/${id}",
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
      <div className="edit-employee">
        <p1>Edit Employee</p1>
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
         
          <button type='submit' className='btn btn-block'>Edit Details</button>
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

export default connect(mapStateToProps, null)(EditEmployee);
