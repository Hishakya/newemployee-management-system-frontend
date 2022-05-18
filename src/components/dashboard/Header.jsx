import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to ='/'>Admin Dashboard</Link>
            </div>
            <ul>
                <li> 
                    <Link to ='/Signin'>
                        <FaSignInAlt/>Sign In sir
                    </Link>
                </li>
                <li>
                    <Link to ='/Signup'>
                        <FaUser/>Sign Up
                    </Link>
                </li>
                <li>
                    <Link to ='/Signup'>
                        <FaSignOutAlt/>dd
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default Header