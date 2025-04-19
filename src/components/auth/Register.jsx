// // Updated Register.js
// import React, { useState } from 'react';
// import '../styles/auth.css';
// import image1 from '../assets/image1.png';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     console.log('Registration data:', formData);
//     window.location.href = '/login';
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-left">
//         <img src={image1} alt="HRMS Illustration" className="auth-image" />
//         <div className="auth-text-container">
//           <p className="auth-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           </p>
//           <p className="auth-text-secondary">
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//         </div>
//         <div className="dot-indicators">
//           <span className="dot active"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//         </div>
//       </div>
//       <div className="auth-right">
//         <div className="auth-form-container">
//           <h1>Welcome to Dashboard</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="fullName">Full name*</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="email">Email Address*</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="password">Password*</label>
//               <div className="password-input-container">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button" 
//                   className="password-toggle" 
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password*</label>
//               <div className="password-input-container">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button" 
//                   className="password-toggle" 
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
            
//             <button type="submit" className="auth-button">Register</button>
//           </form>
          
//           <p className="auth-switch">
//             Already have an account? <a href="/login">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import '../styles/auth.css';
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/image1.png';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     console.log('Registration data:', formData);
//     navigate('/login');
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-left">
//         <img src={image1} alt="HRMS Illustration" className="auth-image" />
//         <div className="auth-text-container">
//           <p className="auth-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           </p>
//           <p className="auth-text-secondary">
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//         </div>
//         <div className="dot-indicators">
//           <span className="dot active"></span>
//           <span className="dot"></span>
//           <span className="dot"></span>
//         </div>
//       </div>
//       <div className="auth-right">
//         <div className="auth-form-container">
//           <h1>Welcome to Dashboard</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="fullName">Full name*</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="email">Email Address*</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="password">Password*</label>
//               <div className="password-input-container">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button" 
//                   className="password-toggle" 
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password*</label>
//               <div className="password-input-container">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button 
//                   type="button" 
//                   className="password-toggle" 
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
            
//             <button type="submit" className="auth-button">Register</button>
//           </form>
          
//           <p className="auth-switch">
//             Already have an account? <a href="/login">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;