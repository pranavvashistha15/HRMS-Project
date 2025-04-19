// import React, { useState } from 'react';
// import '../../styles/dashboard.css';

// const AddNewCandidate = ({ onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     resume: null,
//   });
  
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [isSubmitActive, setIsSubmitActive] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFileUpload = (e) => {
//     setFormData({
//       ...formData,
//       resume: e.target.files[0]
//     });
//   };

//   const handleAgreeChange = () => {
//     setAgreeToTerms(!agreeToTerms);
//     setIsSubmitActive(!agreeToTerms);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSubmitActive) {
//       onSave(formData);
//       onClose();
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="add-candidate-modal">
//         <div className="modal-header">
//           <h2>Add New Candidate</h2>
//           <button className="close-button" onClick={onClose}>×</button>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name*"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number*"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="position"
//                 placeholder="Position*"
//                 value={formData.position}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="experience"
//                 placeholder="Experience*"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group resume-upload">
//               <input
//                 type="text"
//                 placeholder="Resume*"
//                 readOnly
//                 value={formData.resume ? formData.resume.name : ''}
//               />
//               <label className="upload-button">
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFileUpload}
//                   hidden
//                 />
//                 <span className="upload-icon">↑</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="form-row terms-row">
//             <label className="checkbox-container">
//               <input
//                 type="checkbox"
//                 checked={agreeToTerms}
//                 onChange={handleAgreeChange}
//               />
//               <span className="checkmark"></span>
//               <span className="terms-text">
//                 I hereby declare that the above information is true to the best of my knowledge and belief
//               </span>
//             </label>
//           </div>
          
//           <div className="form-row submit-row">
//             <button 
//               type="submit" 
//               className={`save-button ${isSubmitActive ? 'active' : ''}`}
//               disabled={!isSubmitActive}
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [sidebarSearch, setSidebarSearch] = useState('');
//   const [headerSearch, setHeaderSearch] = useState('');
//   const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);
  
//   const openAddCandidate = () => {
//     setIsAddCandidateOpen(true);
//   };
  
//   const closeAddCandidate = () => {
//     setIsAddCandidateOpen(false);
//   };
  
//   const saveCandidate = (candidateData) => {
//     // Here you would handle saving the candidate data
//     console.log('Saving candidate:', candidateData);
//     // You could add the new candidate to your state or send data to an API
//   };
  
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo-container">
//           <div className="logo-box"></div>
//           <span className="logo-text">LOGO</span>
//         </div>
        
//         <div className="sidebar-search">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             value={sidebarSearch}
//             onChange={(e) => setSidebarSearch(e.target.value)}
//           />
//           <span className="search-icon">🔍</span>
//         </div>
        
//         <div className="sidebar-menu">
//           <div className="menu-section">
//             <p className="section-title">Recruitment</p>
//             <div className="menu-item active">
//               <span className="menu-icon">👤</span>
//               <span>Candidates</span>
//             </div>
//           </div>
          
//           <div className="menu-section">
//             <p className="section-title">Organization</p>
//             <div className="menu-item">
//               <span className="menu-icon">👥</span>
//               <span>Employees</span>
//             </div>
//             <div className="menu-item">
//               <span className="menu-icon">📊</span>
//               <span>Attendance</span>
//             </div>
//             <div className="menu-item">
//               <span className="menu-icon">📋</span>
//               <span>Leaves</span>
//             </div>
//           </div>
          
//           <div className="menu-section">
//             <p className="section-title">Others</p>
//             <div className="menu-item">
//               <span className="menu-icon">↩️</span>
//               <span>Logout</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="main-header">
//           <h1>Candidates</h1>
//           <div className="header-icons">
//             <span className="header-icon">✉️</span>
//             <span className="header-icon">🔔</span>
//             <span className="header-icon">👤</span>
//           </div>
//         </div>
        
//         <div className="filters-row">
//           <div className="filters">
//             <div className="filter-dropdown">
//               <button className="filter-btn">
//                 Status <span className="arrow-down">▼</span>
//               </button>
//             </div>
//             <div className="filter-dropdown">
//               <button className="filter-btn">
//                 Position <span className="arrow-down">▼</span>
//               </button>
//             </div>
//           </div>
          
//           <div className="actions">
//             <div className="header-search">
//               <input 
//                 type="text" 
//                 placeholder="Search" 
//                 value={headerSearch}
//                 onChange={(e) => setHeaderSearch(e.target.value)}
//               />
//               <span className="search-icon">🔍</span>
//             </div>
//             <button className="add-btn" onClick={openAddCandidate}>Add Candidate</button>
//           </div>
//         </div>
        
//         <div className="candidates-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Sr no.</th>
//                 <th>Candidates Name</th>
//                 <th>Email Address</th>
//                 <th>Phone Number</th>
//                 <th>Position</th>
//                 <th>Status</th>
//                 <th>Experience</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>01</td>
//                 <td>Jacob William</td>
//                 <td>jacob.william@example.com</td>
//                 <td>(252) 555-0111</td>
//                 <td>Senior Developer</td>
//                 <td>
//                   <div className="status-dropdown">
//                     <span className="status new">New</span>
//                     <span className="arrow-down">▼</span>
//                   </div>
//                 </td>
//                 <td>1+</td>
//                 <td>
//                   <button className="action-menu">⋮</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>02</td>
//                 <td>Guy Hawkins</td>
//                 <td>kenzl.lawson@example.com</td>
//                 <td>(907) 555-0101</td>
//                 <td>Human Resource Leader</td>
//                 <td>
//                   <div className="status-dropdown">
//                     <span className="status new">New</span>
//                     <span className="arrow-down">▼</span>
//                   </div>
//                 </td>
//                 <td>
//                   <button className="download-btn">Download Resume</button>
//                 </td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>03</td>
//                 <td>Arlene McCoy</td>
//                 <td>arlene.mccoy@example.com</td>
//                 <td>(302) 555-0107</td>
//                 <td>Full Time Designer</td>
//                 <td>
//                   <div className="status-pill selected">Selected</div>
//                 </td>
//                 <td>
//                   <button className="delete-btn">Delete Candidate</button>
//                 </td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>04</td>
//                 <td>Leslie Alexander</td>
//                 <td>willie.jennings@example.com</td>
//                 <td>(207) 555-0119</td>
//                 <td>Full Time Developer</td>
//                 <td>
//                   <div className="status-dropdown">
//                     <span className="status rejected">Rejected</span>
//                     <span className="arrow-down">▼</span>
//                   </div>
//                 </td>
//                 <td>0</td>
//                 <td>
//                   <button className="action-menu">⋮</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Add New Candidate Modal */}
//       {isAddCandidateOpen && (
//         <AddNewCandidate 
//           onClose={closeAddCandidate} 
//           onSave={saveCandidate}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState } from 'react';
// import '../../styles/Dashboard.css';

// const AddNewCandidate = ({ onClose, onSave, candidateToEdit, isEditing }) => {
//   const [formData, setFormData] = useState(candidateToEdit || {
//     fullName: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     resume: null,
//     status: 'New',
//     id: Date.now()
//   });
  
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [isSubmitActive, setIsSubmitActive] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFileUpload = (e) => {
//     setFormData({
//       ...formData,
//       resume: e.target.files[0]
//     });
//   };

//   const handleAgreeChange = () => {
//     setAgreeToTerms(!agreeToTerms);
//     setIsSubmitActive(!agreeToTerms);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSubmitActive || isEditing) {
//       onSave(formData);
//       onClose();
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="add-candidate-modal">
//         <div className="modal-header">
//           <h2>{isEditing ? 'Edit Candidate' : 'Add New Candidate'}</h2>
//           <button className="close-button" onClick={onClose}>×</button>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name*"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number*"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="position"
//                 placeholder="Position*"
//                 value={formData.position}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="experience"
//                 placeholder="Experience*"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group resume-upload">
//               <input
//                 type="text"
//                 placeholder="Resume*"
//                 readOnly
//                 value={formData.resume ? formData.resume.name : ''}
//               />
//               <label className="upload-button">
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFileUpload}
//                   hidden
//                 />
//                 <span className="upload-icon">↑</span>
//               </label>
//             </div>
//           </div>
          
//           {!isEditing && (
//             <div className="form-row terms-row">
//               <label className="checkbox-container">
//                 <input
//                   type="checkbox"
//                   checked={agreeToTerms}
//                   onChange={handleAgreeChange}
//                 />
//                 <span className="checkmark"></span>
//                 <span className="terms-text">
//                   I hereby declare that the above information is true to the best of my knowledge and belief
//                 </span>
//               </label>
//             </div>
//           )}
          
//           <div className="form-row submit-row">
//             <button 
//               type="submit" 
//               className={`save-button ${(isSubmitActive || isEditing) ? 'active' : ''}`}
//               disabled={!isSubmitActive && !isEditing}
//             >
//               {isEditing ? 'Update' : 'Save'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [sidebarSearch, setSidebarSearch] = useState('');
//   const [headerSearch, setHeaderSearch] = useState('');
//   const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);
//   const [candidates, setCandidates] = useState([
//     {
//       id: 1,
//       fullName: 'Jacob William',
//       email: 'jacob.william@example.com',
//       phone: '(252) 555-0111',
//       position: 'Senior Developer',
//       status: 'New',
//       experience: '1+',
//       resume: null
//     },
//     {
//       id: 2,
//       fullName: 'Guy Hawkins',
//       email: 'kenzl.lawson@example.com',
//       phone: '(907) 555-0101',
//       position: 'Human Resource Leader',
//       status: 'New',
//       experience: '',
//       resume: null
//     },
//     {
//       id: 3,
//       fullName: 'Arlene McCoy',
//       email: 'arlene.mccoy@example.com',
//       phone: '(302) 555-0107',
//       position: 'Full Time Designer',
//       status: 'Selected',
//       experience: '',
//       resume: null
//     },
//     {
//       id: 4,
//       fullName: 'Leslie Alexander',
//       email: 'willie.jennings@example.com',
//       phone: '(207) 555-0119',
//       position: 'Full Time Developer',
//       status: 'Rejected',
//       experience: '0',
//       resume: null
//     }
//   ]);
//   const [editingCandidate, setEditingCandidate] = useState(null);
  
//   const openAddCandidate = () => {
//     setEditingCandidate(null);
//     setIsAddCandidateOpen(true);
//   };
  
//   const closeAddCandidate = () => {
//     setIsAddCandidateOpen(false);
//     setEditingCandidate(null);
//   };
  
//   const saveCandidate = (candidateData) => {
//     if (editingCandidate) {
//       // Update existing candidate
//       setCandidates(candidates.map(candidate => 
//         candidate.id === editingCandidate.id ? candidateData : candidate
//       ));
//     } else {
//       // Add new candidate
//       setCandidates([...candidates, candidateData]);
//     }
//   };
  
//   const editCandidate = (candidate) => {
//     setEditingCandidate(candidate);
//     setIsAddCandidateOpen(true);
//   };
  
//   const deleteCandidate = (id) => {
//     setCandidates(candidates.filter(candidate => candidate.id !== id));
//   };
  
//   const updateStatus = (id, newStatus) => {
//     setCandidates(candidates.map(candidate => 
//       candidate.id === id ? {...candidate, status: newStatus} : candidate
//     ));
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo-container">
//           <div className="logo-box"></div>
//           <span className="logo-text">LOGO</span>
//         </div>
        
//         <div className="sidebar-search">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             value={sidebarSearch}
//             onChange={(e) => setSidebarSearch(e.target.value)}
//           />
//           <span className="search-icon">🔍</span>
//         </div>
        
//         <div className="sidebar-menu">
//           <div className="menu-section">
//             <p className="section-title">Recruitment</p>
//             <div className="menu-item active">
//               <span className="menu-icon">👤</span>
//               <span>Candidates</span>
//             </div>
//           </div>
          
//           <div className="menu-section">
//             <p className="section-title">Organization</p>
//             <div className="menu-item">
//               <span className="menu-icon">👥</span>
//               <span>Employees</span>
//             </div>
//             <div className="menu-item">
//               <span className="menu-icon">📊</span>
//               <span>Attendance</span>
//             </div>
//             <div className="menu-item">
//               <span className="menu-icon">📋</span>
//               <span>Leaves</span>
//             </div>
//           </div>
          
//           <div className="menu-section">
//             <p className="section-title">Others</p>
//             <div className="menu-item">
//               <span className="menu-icon">↩️</span>
//               <span>Logout</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="main-header">
//           <h1>Candidates</h1>
//           <div className="header-icons">
//             <span className="header-icon">✉️</span>
//             <span className="header-icon">🔔</span>
//             <span className="header-icon">👤</span>
//           </div>
//         </div>
        
//         <div className="filters-row">
//           <div className="filters">
//             <div className="filter-dropdown">
//               <button className="filter-btn">
//                 Status <span className="arrow-down">▼</span>
//               </button>
//             </div>
//             <div className="filter-dropdown">
//               <button className="filter-btn">
//                 Position <span className="arrow-down">▼</span>
//               </button>
//             </div>
//           </div>
          
//           <div className="actions">
//             <div className="header-search">
//               <input 
//                 type="text" 
//                 placeholder="Search" 
//                 value={headerSearch}
//                 onChange={(e) => setHeaderSearch(e.target.value)}
//               />
//               <span className="search-icon">🔍</span>
//             </div>
//             <button className="add-btn" onClick={openAddCandidate}>Add Candidate</button>
//           </div>
//         </div>
        
//         <div className="candidates-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Sr no.</th>
//                 <th>Candidates Name</th>
//                 <th>Email Address</th>
//                 <th>Phone Number</th>
//                 <th>Position</th>
//                 <th>Status</th>
//                 <th>Experience</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {candidates.map((candidate, index) => (
//                 <tr key={candidate.id}>
//                   <td>{index + 1}</td>
//                   <td>{candidate.fullName}</td>
//                   <td>{candidate.email}</td>
//                   <td>{candidate.phone}</td>
//                   <td>{candidate.position}</td>
//                   <td>
//                     <div className="status-dropdown">
//                       <span className={`status ${candidate.status.toLowerCase()}`}>
//                         {candidate.status}
//                       </span>
//                       <select 
//                         className="status-select"
//                         value={candidate.status}
//                         onChange={(e) => updateStatus(candidate.id, e.target.value)}
//                       >
//                         <option value="New">New</option>
//                         <option value="Selected">Selected</option>
//                         <option value="Rejected">Rejected</option>
//                       </select>
//                     </div>
//                   </td>
//                   <td>{candidate.experience}</td>
//                   <td>
//                     <div className="action-buttons">
//                       <button 
//                         className="edit-btn"
//                         onClick={() => editCandidate(candidate)}
//                       >
//                         Edit
//                       </button>
//                       <button 
//                         className="delete-btn"
//                         onClick={() => deleteCandidate(candidate.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Add/Edit Candidate Modal */}
//       {isAddCandidateOpen && (
//         <AddNewCandidate 
//           onClose={closeAddCandidate} 
//           onSave={saveCandidate}
//           candidateToEdit={editingCandidate}
//           isEditing={!!editingCandidate}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from 'react';
// import '../../styles/dashboard.css';

// const AddNewCandidate = ({ onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     resume: null,
//   });
  
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [isSubmitActive, setIsSubmitActive] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFileUpload = (e) => {
//     setFormData({
//       ...formData,
//       resume: e.target.files[0]
//     });
//   };

//   const handleAgreeChange = () => {
//     setAgreeToTerms(!agreeToTerms);
//     setIsSubmitActive(!agreeToTerms);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSubmitActive) {
//       onSave(formData);
//       onClose();
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="add-candidate-modal">
//         <div className="modal-header">
//           <h2>Add New Candidate</h2>
//           <button className="close-button" onClick={onClose}>×</button>
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name*"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number*"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="position"
//                 placeholder="Position*"
//                 value={formData.position}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
          
//           <div className="form-row">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="experience"
//                 placeholder="Experience*"
//                 value={formData.experience}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group resume-upload">
//               <input
//                 type="text"
//                 placeholder="Resume*"
//                 readOnly
//                 value={formData.resume ? formData.resume.name : ''}
//               />
//               <label className="upload-button">
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFileUpload}
//                   hidden
//                 />
//                 <span className="upload-icon">↑</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="form-row terms-row">
//             <label className="checkbox-container">
//               <input
//                 type="checkbox"
//                 checked={agreeToTerms}
//                 onChange={handleAgreeChange}
//               />
//               <span className="checkmark"></span>
//               <span className="terms-text">
//                 I hereby declare that the above information is true to the best of my knowledge and belief
//               </span>
//             </label>
//           </div>
          
//           <div className="form-row submit-row">
//             <button 
//               type="submit" 
//               className={`save-button ${isSubmitActive ? 'active' : ''}`}
//               disabled={!isSubmitActive}
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [sidebarSearch, setSidebarSearch] = useState('');
//   const [headerSearch, setHeaderSearch] = useState('');
//   const [isAddCandidateOpen, setIsAddCandidateOpen] = useState(false);
  
//   const openAddCandidate = () => {
//     setIsAddCandidateOpen(true);
//   };
  
//   const closeAddCandidate = () => {
//     setIsAddCandidateOpen(false);
//   };
  
//   const saveCandidate = (candidateData) => {
//     // Here you would handle saving the candidate data
//     console.log('Saving candidate:', candidateData);
//     // You could add the new candidate to your state or send data to an API
//   };
  
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo-container">
//           <div className="logo-box"></div>
//           <span className="logo-text">LOGO</span>
//         </div>
        
//         <div className="sidebar-search">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             value={sidebarSearch}
//             onChange={(e) => setSidebarSearch(e.target.value)}
//           />
//           <span className="search-icon">🔍</span>
//         </div>
        
//         <div className="sidebar-menu">
//           <div className="menu-section">
//             <p className="section-title">Recruitment</p>
//             <div className="menu-item active">
//               <span className="menu-icon">👤</span>
//               <span>Candidates</span>
//             </div>
//           </div>
          
//           <div className="menu-section">
//             <p className="section-title">Organization</p>
//             <div className="menu-item">
//               <span className="menu-icon">👥</span>
//               <span>Employees</span>
//             </div>
//             <div className="menu-item">
//               <span className="menu-icon">📊</span>
//               <span>Attendance</span>
//             </div>
//             <div className="menu-item">
//               <span className="menu-icon">📋</span>
//               <span>Leaves</span>
//             </div>
//           </div>
          
//           <div className="menu-section">
//             <p className="section-title">Others</p>
//             <div className="menu-item">
//               <span className="menu-icon">↩️</span>
//               <span>Logout</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="main-header">
//           <h1>Candidates</h1>
//           <div className="header-icons">
//             <span className="header-icon">✉️</span>
//             <span className="header-icon">🔔</span>
//             <span className="header-icon">👤</span>
//           </div>
//         </div>
        
//         <div className="filters-row">
//           <div className="filters">
//             <div className="filter-dropdown">
//               <button className="filter-btn">
//                 Status <span className="arrow-down">▼</span>
//               </button>
//             </div>
//             <div className="filter-dropdown">
//               <button className="filter-btn">
//                 Position <span className="arrow-down">▼</span>
//               </button>
//             </div>
//           </div>
          
//           <div className="actions">
//             <div className="header-search">
//               <input 
//                 type="text" 
//                 placeholder="Search" 
//                 value={headerSearch}
//                 onChange={(e) => setHeaderSearch(e.target.value)}
//               />
//               <span className="search-icon">🔍</span>
//             </div>
//             <button className="add-btn" onClick={openAddCandidate}>Add Candidate</button>
//           </div>
//         </div>
        
//         <div className="candidates-table">
//           <table>
//             <thead>
//               <tr>
//                 <th>Sr no.</th>
//                 <th>Candidates Name</th>
//                 <th>Email Address</th>
//                 <th>Phone Number</th>
//                 <th>Position</th>
//                 <th>Status</th>
//                 <th>Experience</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>01</td>
//                 <td>Jacob William</td>
//                 <td>jacob.william@example.com</td>
//                 <td>(252) 555-0111</td>
//                 <td>Senior Developer</td>
//                 <td>
//                   <div className="status-dropdown">
//                     <span className="status new">New</span>
//                     <span className="arrow-down">▼</span>
//                   </div>
//                 </td>
//                 <td>1+</td>
//                 <td>
//                   <button className="action-menu">⋮</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td>02</td>
//                 <td>Guy Hawkins</td>
//                 <td>kenzl.lawson@example.com</td>
//                 <td>(907) 555-0101</td>
//                 <td>Human Resource Leader</td>
//                 <td>
//                   <div className="status-dropdown">
//                     <span className="status new">New</span>
//                     <span className="arrow-down">▼</span>
//                   </div>
//                 </td>
//                 <td>
//                   <button className="download-btn">Download Resume</button>
//                 </td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>03</td>
//                 <td>Arlene McCoy</td>
//                 <td>arlene.mccoy@example.com</td>
//                 <td>(302) 555-0107</td>
//                 <td>Full Time Designer</td>
//                 <td>
//                   <div className="status-pill selected">Selected</div>
//                 </td>
//                 <td>
//                   <button className="delete-btn">Delete Candidate</button>
//                 </td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td>04</td>
//                 <td>Leslie Alexander</td>
//                 <td>willie.jennings@example.com</td>
//                 <td>(207) 555-0119</td>
//                 <td>Full Time Developer</td>
//                 <td>
//                   <div className="status-dropdown">
//                     <span className="status rejected">Rejected</span>
//                     <span className="arrow-down">▼</span>
//                   </div>
//                 </td>
//                 <td>0</td>
//                 <td>
//                   <button className="action-menu">⋮</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Add New Candidate Modal */}
//       {isAddCandidateOpen && (
//         <AddNewCandidate 
//           onClose={closeAddCandidate} 
//           onSave={saveCandidate}
//         />
//       )}
//     </div>
//   );
// };

// export default Dashboard;