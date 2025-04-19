import React from "react";
import "./Attendance.css";
import { FiMoreVertical } from "react-icons/fi";
import CommonHeader from "../../common/CommonHeader";

const attendanceData = [
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

const Attendance = () => {
  return (
    <div className="employees-container">
      <CommonHeader screenName={"Attendance"} />
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
          {attendanceData.map((emp, index) => (
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

export default Attendance;
