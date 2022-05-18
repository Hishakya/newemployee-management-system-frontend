import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'

const DisplayUser = ({ getUsers }) => {

  useEffect(() => {
    const url = ("https://admin-dashboard-backend-six.vercel.app/api/admin/getAllUsers..")
    const config = {
      headers: {
        "auth-token": getUsers
      }
    }
    axios.get(url, config)
      .then(response => console.log(response.data))
      .catch(error => console.error(error))
  })
  console.log(getUsers)

  return (
    <>
      <h2>Display Users</h2>
    </>
  )
}

const mapStateToProps = (state) => ({
  getUsers: state.signin.userList
})

export default connect(mapStateToProps, null)(DisplayUser)