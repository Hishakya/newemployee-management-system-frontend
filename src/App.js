import { Routes, Route } from "react-router-dom";
import AddEmployee from "./components/admin/AddEmployee";
import EditEmployee from "./components/admin/EditEmployee";
import Signup from "./components/admin/Signup";
import Signin from "./components/employee/Signin";
import AdminDashboard from "./pages/AdminDashboard";
import Adminpage from "./pages/Adminpage";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Employeepage from "./pages/Employeepage";
import HomePage from "./pages/Homepage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/employee" element={<Employeepage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/edit/:id" element={<EditEmployee />} />
        <Route path="/admin/add" element={<AddEmployee />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
};

export default App;
