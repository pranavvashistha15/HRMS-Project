import React, { useState } from "react";
import {
  FiUsers,
  FiUser,
  FiBarChart2,
  FiCalendar,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      title: "Recruitment",
      tabs: [{ label: "Candidates", icon: <FiUsers /> }],
    },
    {
      title: "Organization",
      tabs: [
        { label: "Employees", icon: <FiUser /> },
        { label: "Attendance", icon: <FiBarChart2 /> },
        { label: "Leaves", icon: <FiCalendar /> },
      ],
    },
    {
      title: "Others",
      tabs: [{ label: "Logout", icon: <FiLogOut />, logout: true }],
    },
  ];

  return (
    <>
      {/* <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button> */}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-container">
          <div className="logo-icon">▢</div>
          <span className="logo-text">LOGO</span>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <p className="section-title">{section.title}</p>
            <ul>
              {section.tabs.map(({ label, icon, logout }) => (
                <li
                  key={label}
                  className={`sidebar-item ${
                    label === activeTab ? "active" : ""
                  } ${logout ? "logout" : ""}`}
                  onClick={() => {
                    if (!logout) setActiveTab(label);
                    setIsOpen(false); // Close sidebar on mobile after selection
                  }}
                >
                  <span className="icon">{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;
