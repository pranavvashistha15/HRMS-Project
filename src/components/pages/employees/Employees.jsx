// import React from "react";
// import "./Employees.css";
// import { FiMoreVertical } from "react-icons/fi";
// import CommonHeader from "../../common/CommonHeader";

// const employees = [
//   {
//     name: "Jane Copper",
//     email: "jane.copper@example.com",
//     phone: "(704) 555-0127",
//     position: "Intern",
//     department: "Designer",
//     doj: "10/06/13",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     name: "Arlene McCoy",
//     email: "arlene.mccoy@example.com",
//     phone: "(302) 555-0107",
//     position: "Full Time",
//     department: "Designer",
//     doj: "11/07/16",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Cody Fisher",
//     email: "deanna.curtis@example.com",
//     phone: "(252) 555-0126",
//     position: "Senior",
//     department: "Backend Development",
//     doj: "08/15/17",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     name: "Janney Wilson",
//     email: "janney.wilson@example.com",
//     phone: "(252) 555-0126",
//     position: "Junior",
//     department: "Backend Development",
//     doj: "12/04/17",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     name: "Leslie Alexander",
//     email: "willie.jennings@example.com",
//     phone: "(207) 555-0119",
//     position: "Team Lead",
//     department: "Human Resource",
//     doj: "05/30/14",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
// ];

// const Employees = () => {
//   return (
//     <div className="employees-container">
//         <CommonHeader screenName={"Employees"}/>
//       <table className="employees-table">
//         <thead>
//           <tr>
//             <th>Profile</th>
//             <th>Employee Name</th>
//             <th>Email Address</th>
//             <th>Phone Number</th>
//             <th>Position</th>
//             <th>Department</th>
//             <th>Date of Joining</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp, index) => (
//             <tr key={index}>
//               <td>
//                 <img src={emp.image} alt={emp.name} className="avatar" />
//               </td>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.phone}</td>
//               <td>{emp.position}</td>
//               <td>{emp.department}</td>
//               <td>{emp.doj}</td>
//               <td>
//                 <FiMoreVertical />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };



// export default Employees;



// import React from "react";
// import "./Employees.css";
// import { FiMoreVertical } from "react-icons/fi";
// import CommonHeader from "../../common/CommonHeader";

// const employees = [
//   {
//     name: "Jane Copper",
//     email: "jane.copper@example.com",
//     phone: "(704) 555-0127",
//     position: "Intern",
//     department: "Designer",
//     doj: "10/06/13",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     name: "Arlene McCoy",
//     email: "arlene.mccoy@example.com",
//     phone: "(302) 555-0107",
//     position: "Full Time",
//     department: "Designer",
//     doj: "11/07/16",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Cody Fisher",
//     email: "deanna.curtis@example.com",
//     phone: "(252) 555-0126",
//     position: "Senior",
//     department: "Backend Development",
//     doj: "08/15/17",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     name: "Janney Wilson",
//     email: "janney.wilson@example.com",
//     phone: "(252) 555-0126",
//     position: "Junior",
//     department: "Backend Development",
//     doj: "12/04/17",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     name: "Leslie Alexander",
//     email: "willie.jennings@example.com",
//     phone: "(207) 555-0119",
//     position: "Team Lead",
//     department: "Human Resource",
//     doj: "05/30/14",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
// ];

// // Position Component
// const Position = ({ icon }) => {
//   return (
//     <div className="position">
//       <div className="rectangle-9"></div>
//       <div className="frame-50">
//         <div className="position2">Position</div>
//         <img className="icon" src={icon || "/icon0.svg"} alt="Position icon" />
//       </div>
//     </div>
//   );
// };

// // Search Component
// const Search = ({ icon }) => {
//   return (
//     <div className="search">
//       <div className="dashboard">
//         <img className="icon2" src={icon || "/icon1.svg"} alt="Search icon" />
//         <div className="search2">Search</div>
//       </div>
//     </div>
//   );
// };

// // Filter Frame Component
// const FilterFrame = () => {
//   return (
//     <div className="frame-53">
//       <div className="frame-52">
//         <Position />
//       </div>
//       <div className="frame-51">
//         <Search />
//       </div>
//     </div>
//   );
// };

// const Employees = () => {
//   return (
//     <div className="employees-container">
//       <CommonHeader screenName={"Employees"}/>
      
//       {/* Add the filters with Position and Search */}
//       <div className="filters-container">
//         <FilterFrame />
//       </div>
      
//       <table className="employees-table">
//         <thead>
//           <tr>
//             <th>Profile</th>
//             <th>Employee Name</th>
//             <th>Email Address</th>
//             <th>Phone Number</th>
//             <th>Position</th>
//             <th>Department</th>
//             <th>Date of Joining</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp, index) => (
//             <tr key={index}>
//               <td>
//                 <img src={emp.image} alt={emp.name} className="avatar" />
//               </td>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.phone}</td>
//               <td>{emp.position}</td>
//               <td>{emp.department}</td>
//               <td>{emp.doj}</td>
//               <td>
//                 <FiMoreVertical />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Employees;

import React, { useState } from "react";
import "./Employees.css";
import { FiMoreVertical, FiChevronDown, FiSearch } from "react-icons/fi";
import CommonHeader from "../../common/CommonHeader";

const employees = [
  {
    name: "Jane Copper",
    email: "jane.copper@example.com",
    phone: "(704) 555-0127",
    position: "Intern",
    department: "Designer",
    doj: "10/06/13",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Arlene McCoy",
    email: "arlene.mccoy@example.com",
    phone: "(302) 555-0107",
    position: "Full Time",
    department: "Designer",
    doj: "11/07/16",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Cody Fisher",
    email: "deanna.curtis@example.com",
    phone: "(252) 555-0126",
    position: "Senior",
    department: "Backend Development",
    doj: "08/15/17",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Janney Wilson",
    email: "janney.wilson@example.com",
    phone: "(252) 555-0126",
    position: "Junior",
    department: "Backend Development",
    doj: "12/04/17",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Leslie Alexander",
    email: "willie.jennings@example.com",
    phone: "(207) 555-0119",
    position: "Team Lead",
    department: "Human Resource",
    doj: "05/30/14",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// Position options for dropdown
const positionOptions = ["All Positions", "Intern", "Junior", "Full Time", "Senior", "Team Lead"];

const Employees = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("Position");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePositionSelect = (position) => {
    setSelectedPosition(position);
    setIsDropdownOpen(false);
  };

  return (
    <div className="employees-container">
      <CommonHeader screenName={"Employees"}/>
      
      {/* Filter Section */}
      <div className="filters-container">
        {/* Position Dropdown */}
        <div className="position-dropdown">
          <button className="position-button" onClick={toggleDropdown}>
            <span>{selectedPosition}</span>
            <FiChevronDown className="dropdown-icon" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {positionOptions.map((position, index) => (
                <div 
                  key={index} 
                  className="dropdown-item"
                  onClick={() => handlePositionSelect(position)}
                >
                  {position}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Table */}
      <table className="employees-table">
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
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>
                <img src={emp.image} alt={emp.name} className="avatar" />
              </td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>{emp.doj}</td>
              <td>
                <FiMoreVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
