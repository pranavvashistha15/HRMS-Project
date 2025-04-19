import React, { useState } from "react";
import "./Candidates.css";
import CommonHeader from "../../common/CommonHeader";

const Candidates = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Jane Copper",
      email: "jane.copper@example.com",
      phone: "(704) 555-0127",
      position: "Designer Intern",
      status: "New",
      experience: 0,
    },
    // You can add more dummy data here
  ]);

  return (
    <div className="container">
      <main className="main">
        <CommonHeader screenName={"Candidates"} />

        <table>
          <thead>
            <tr>
              <th>Sr no.</th>
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
            {candidates.map((c, i) => (
              <tr key={c.id}>
                <td>{String(i + 1).padStart(2, "0")}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.position}</td>
                <td>
                  <select defaultValue={c.status}>
                    <option value="New">New</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td>{c.experience}</td>
                <td>⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Candidates;
