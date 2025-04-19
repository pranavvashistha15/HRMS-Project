// import React, { useState } from 'react';
// import '../../styles/AddNewCandidate.css';

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

// export default AddNewCandidate;



import React, { useState } from 'react';
import '../../styles/AddNewCandidate.css';

const AddNewCandidate = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
  });
  
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSubmitActive, setIsSubmitActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleAgreeChange = () => {
    setAgreeToTerms(!agreeToTerms);
    setIsSubmitActive(!agreeToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitActive) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="add-candidate-modal">
        <div className="modal-header">
          <h2>Add New Candidate</h2>
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
                name="experience"
                placeholder="Experience*"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group resume-upload">
              <input
                type="text"
                placeholder="Resume*"
                readOnly
                value={formData.resume ? formData.resume.name : ''}
              />
              <label className="upload-button">
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileUpload}
                  hidden
                />
                <span className="upload-icon">↑</span>
              </label>
            </div>
          </div>
          
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
          
          <div className="form-row submit-row">
            <button 
              type="submit" 
              className={`save-button ${isSubmitActive ? 'active' : ''}`}
              disabled={!isSubmitActive}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCandidate;