import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import "./Homepage.css";

const HomePage = () => {
  return (
    <>
     <header className="header">
            <section className='heading'>
  <p>Welcome To Employee Management System</p>
      </section >
      <div className="dd" >
      <ul>
                <li> 
                    <Link to ='/admin'>
                        <FaSignInAlt/>Admin Dashboard
                    </Link>
                </li>
                <li>
                    <Link to ='/employee'>
                        <FaUser/>Employee Dashboard
                    </Link>
                </li>
                
            </ul>
      </div>
            
        </header>
      
      
    </>
  );
};

export default HomePage;
