// import React, { useState } from 'react';
// import '../styles/auth.css';
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/image1.png';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
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
//     console.log('Login data:', formData);
//     // Redirect to dashboard after login
//     navigate('/dashboard');
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
            
//             <div className="forgot-password">
//               <a href="/forgot-password">Forgot password?</a>
//             </div>
            
//             <button type="submit" className="auth-button">Login</button>
//           </form>
          
//           <p className="auth-switch">
//             Don't have an account? <a href="/register">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import '../styles/auth.css';
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/image1.png';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
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
//     console.log('Login data:', formData);
//     // Redirect to dashboard after login
//     navigate('/dashboard');
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
            
//             <div className="forgot-password">
//               <a href="/forgot-password">Forgot password?</a>
//             </div>
            
//             <button type="submit" className="auth-button">Login</button>
//           </form>
          
//           <p className="auth-switch">
//             Don't have an account? <a href="/register">Register</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;