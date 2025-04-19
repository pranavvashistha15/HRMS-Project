// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// Update App.js to include the Dashboard route
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import Dashboard from './components/auth/Dashboard'
// import Employees from './components/auth/EmployeeDasgboard';


// function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />

//         <Route path="/" element={<Login />} />



//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import Dashboard from "./components/auth/Dashboard";
// import EmployeeDashboard from './components/auth/EmployeeDashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* <Route path="/employees" element={<Employees />} /> */}
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import Sidebar from "../src/components/common/Sidebar";
// import "./App.css";
// import Candidates from "../src/components/pages/candidates/Candidates"
// import Employees from "../src/components/pages/employees/Employees"
// import Attendance from "../src/components/pages/attendance/Attendance"
// import Leaves from "../src/components/pages/leaves/Leaves"




// const App = () => {
//   const [activeTab, setActiveTab] = useState("Candidates");

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "Candidates":
//         return <Candidates />;
//       case "Employees":
//         return <Employees />;
//       case "Attendance":
//         return <Attendance />;
//       case "Leaves":
//         return <Leaves />;
//       default:
//         return <div>Select a tab</div>;
//     }
//   };

//   return (
//     <div className="app-layout">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <main className="main-content">{renderComponent()}</main>
//     </div>
//   );
// };



// export default App;



import React, { useState } from "react";
import Sidebar from "../src/components/common/Sidebar";
import "./App.css";
import Candidates from "../src/components/pages/candidates/Candidates";
import Employees from "../src/components/pages/employees/Employees";
import Attendance from "../src/components/pages/attendance/Attendance";
import LeaveManager from "./components/pages/leaves/Leaves";
import AttendanceComponent from "./components/pages/leaves/AttendanceComponent";
import LogoutPopup from "./components/pages/logout/logoutPopup"; // Import the LogoutPopup

const App = () => {
  const [activeTab, setActiveTab] = useState("Candidates");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const renderComponent = () => {
    switch (activeTab) {
      case "Candidates":
        return <Candidates />;
      case "Employees":
        return <Employees />;
      case "Attendance":
        return <Attendance />;
      case "Leaves":
        return <LeaveManager />;
      default:
        return <div>Select a tab</div>;
    }
  };

  const handleLogout = () => {
    // Add your actual logout logic here
    console.log("Performing logout...");
    // Typically you would:
    // 1. Clear authentication tokens
    // 2. Redirect to login page
    // 3. Reset application state if needed
    setShowLogoutPopup(false);
  };

  return (
    <div className="app-layout">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onLogoutClick={() => setShowLogoutPopup(true)} // Pass this to Sidebar
      />
      <main className="main-content">{renderComponent()}</main>
      
      {/* Logout Popup */}
      {showLogoutPopup && (
        <LogoutPopup
          onCancel={() => setShowLogoutPopup(false)}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default App;
