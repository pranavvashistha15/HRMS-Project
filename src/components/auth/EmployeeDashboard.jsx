import React, { useState, useEffect } from 'react';
import '../../styles/EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [headerSearch, setHeaderSearch] = useState('');
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [isEditEmployeeOpen, setIsEditEmployeeOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: 'Jane Copper',
      email: 'jane.copper@example.com',
      phone: '(704) 555-0127',
      position: 'Intern',
      department: 'Designer',
      dateJoining: '10/06/13',
      profileImg: '/api/placeholder/40/40'
    },
    {
      id: 2,
      fullName: 'Arlene McCoy',
      email: 'arlene.mccoy@example.com',
      phone: '(302) 555-0107',
      position: 'Full Time',
      department: 'Designer',
      dateJoining: '11/07/16',
      profileImg: '/api/placeholder/40/40'
    },
    {
      id: 3,
      fullName: 'Cody Fisher',
      email: 'deanna.curtis@example.com',
      phone: '(252) 555-0126',
      position: 'Senior',
      department: 'Backend Development',
      dateJoining: '08/15/17',
      profileImg: '/api/placeholder/40/40'
    },
    {
      id: 4,
      fullName: 'Janney Wilson',
      email: 'janney.wilson@example.com',
      phone: '(252) 555-0126',
      position: 'Junior',
      department: 'Backend Development',
      dateJoining: '12/04/17',
      profileImg: '/api/placeholder/40/40'
    },
    {
      id: 5,
      fullName: 'Leslie Alexander',
      email: 'willie.jennings@example.com',
      phone: '(207) 555-0119',
      position: 'Team Lead',
      department: 'Human Resource',
      dateJoining: '05/30/14',
      profileImg: '/api/placeholder/40/40'
    }
  ]);

  // Filter employees based on search
  const filteredEmployees = employees.filter(employee => {
    const searchTerm = headerSearch.toLowerCase();
    return (
      employee.fullName.toLowerCase().includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm)
    );
  });

  const openAddEmployee = () => {
    setIsAddEmployeeOpen(true);
  };

  const closeAddEmployee = () => {
    setIsAddEmployeeOpen(false);
  };

  const openEditEmployee = (employee) => {
    setCurrentEmployee(employee);
    setIsEditEmployeeOpen(true);
  };

  const closeEditEmployee = () => {
    setCurrentEmployee(null);
    setIsEditEmployeeOpen(false);
  };

  const saveEmployee = (employeeData) => {
    const newEmployee = {
      ...employeeData,
      id: employees.length + 1,
      profileImg: '/api/placeholder/40/40',
      dateJoining: new Date().toLocaleDateString('en-US', { 
        month: '2-digit', 
        day: '2-digit', 
        year: '2-digit'
      })
    };
    setEmployees([...employees, newEmployee]);
  };

  const updateEmployee = (employeeData) => {
    const updatedEmployees = employees.map(emp => 
      emp.id === employeeData.id ? { ...emp, ...employeeData } : emp
    );
    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-box"></div>
          <span className="logo-text">LOGO</span>
        </div>
        
        <div className="sidebar-search">
          <input 
            type="text" 
            placeholder="Search" 
            value={sidebarSearch}
            onChange={(e) => setSidebarSearch(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-section">
            <p className="section-title">Recruitment</p>
            <div className="menu-item">
              <span className="menu-icon">👤</span>
              <span>Candidates</span>
            </div>
          </div>
          
          <div className="menu-section">
            <p className="section-title">Organization</p>
            <div className="menu-item active">
              <span className="menu-icon">👥</span>
              <span>Employees</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📊</span>
              <span>Attendance</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📋</span>
              <span>Leaves</span>
            </div>
          </div>
          
          <div className="menu-section">
            <p className="section-title">Others</p>
            <div className="menu-item">
              <span className="menu-icon">↩️</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="main-header">
          <h1>Employees</h1>
          <div className="header-icons">
            <span className="header-icon">✉️</span>
            <span className="header-icon">🔔</span>
            <span className="header-icon">👤</span>
          </div>
        </div>
        
        <div className="filters-row">
          <div className="filters">
            <div className="filter-dropdown">
              <button className="filter-btn">
                Department <span className="arrow-down">▼</span>
              </button>
            </div>
            <div className="filter-dropdown">
              <button className="filter-btn">
                Position <span className="arrow-down">▼</span>
              </button>
            </div>
          </div>
          
          <div className="actions">
            <div className="header-search">
              <input 
                type="text" 
                placeholder="Search" 
                value={headerSearch}
                onChange={(e) => setHeaderSearch(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            <button className="add-btn" onClick={openAddEmployee}>Add Employee</button>
          </div>
        </div>
        
        <div className="employees-table">
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Employee Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Position</th>
                <th>Department</th>
                <th>Date of Joining</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="profile-pic">
                      <img src={employee.profileImg} alt={employee.fullName} />
                    </div>
                  </td>
                  <td>{employee.fullName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{employee.dateJoining}</td>
                  <td>
                    <div className="action-menu-container">
                      <button className="action-menu-btn">⋮</button>
                      <div className="action-menu-dropdown">
                        <button onClick={() => openEditEmployee(employee)}>Edit</button>
                        <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Add New Employee Modal */}
      {isAddEmployeeOpen && (
        <EmployeeFormModal 
          onClose={closeAddEmployee} 
          onSave={saveEmployee}
          title="Add New Employee"
        />
      )}

      {/* Edit Employee Modal */}
      {isEditEmployeeOpen && (
        <EmployeeFormModal 
          onClose={closeEditEmployee} 
          onSave={updateEmployee}
          title="Edit Employee"
          employee={currentEmployee}
        />
      )}
    </div>
  );
};

// Employee Form Modal (used for both Add and Edit)
const EmployeeFormModal = ({ onClose, onSave, title, employee = null }) => {
  const [formData, setFormData] = useState({
    id: employee ? employee.id : null,
    fullName: employee ? employee.fullName : '',
    email: employee ? employee.email : '',
    phone: employee ? employee.phone : '',
    position: employee ? employee.position : '',
    department: employee ? employee.department : '',
  });
  
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(!!employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAgreeChange = () => {
    setAgreeToTerms(!agreeToTerms);
    setIsSubmitActive(!agreeToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitActive || employee) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="add-employee-modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="position"
                placeholder="Position*"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="department"
                placeholder="Department*"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {!employee && (
            <div className="form-row terms-row">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={handleAgreeChange}
                />
                <span className="checkmark"></span>
                <span className="terms-text">
                  I hereby declare that the above information is true to the best of my knowledge and belief
                </span>
              </label>
            </div>
          )}
          
          <div className="form-row submit-row">
            <button 
              type="submit" 
              className={`save-button ${isSubmitActive || employee ? 'active' : ''}`}
              disabled={!isSubmitActive && !employee}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDashboard;