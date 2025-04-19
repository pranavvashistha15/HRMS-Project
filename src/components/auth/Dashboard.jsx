// Dashboard.js
import React from 'react';
import '../../styles/dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Load</h2>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-section">
            <h3>1. Search</h3>
            <Link to="/recruitment" className="menu-item">Recruitment</Link>
          </div>
          
          <div className="menu-section">
            <h3>2. Candidates</h3>
            <Link to="/organization" className="menu-item">Organization</Link>
          </div>
          
          <div className="menu-section">
            <h3>3. Employees</h3>
            <Link to="/attendance" className="menu-item">Attendance</Link>
            <Link to="/leaves" className="menu-item">Leaves</Link>
            <Link to="/others" className="menu-item">Others</Link>
            <Link to="/logout" className="menu-item">Logout</Link>
          </div>
          
          <div className="menu-section">
            <h3>4. Results</h3>
            <Link to="/status" className="menu-item">Status</Link>
            <Link to="/position" className="menu-item">Position</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-header">
          <h1>Candidates</h1>
          <div className="search-bar">
            <input type="text" placeholder="Type here to search" />
          </div>
        </div>

        {/* Candidates Table */}
        <div className="candidates-table">
          <table>
            <thead>
              <tr>
                <th>Error</th>
                <th>Candidates Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Position</th>
                <th>Status</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Jacob William</td>
                <td>jacob.william@example.com</td>
                <td>(252) 555-0111</td>
                <td>Senior Developer</td>
                <td>New</td>
                <td>1+</td>
                <td><button className="action-btn">!</button></td>
              </tr>
              <tr>
                <td>02</td>
                <td>Guy Hawkins</td>
                <td>kenzil.awson@example.com</td>
                <td>(907) 555-0101</td>
                <td>Human Resource L..</td>
                <td>New</td>
                <td><button className="action-btn">Download Resume</button></td>
                <td></td>
              </tr>
              <tr>
                <td>03</td>
                <td>Arlene McCoy</td>
                <td>arlene.mccoy@example.com</td>
                <td>(302) 555-0107</td>
                <td>Full Time Designer</td>
                <td>Selected</td>
                <td><button className="action-btn">Delete Candidate</button></td>
                <td></td>
              </tr>
              <tr>
                <td>04</td>
                <td>Leslie Alexander</td>
                <td>willie.jennings@example.com</td>
                <td>(207) 555-0119</td>
                <td>Full Time Developer</td>
                <td>Rejected</td>
                <td>0</td>
                <td><button className="action-btn">!</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;