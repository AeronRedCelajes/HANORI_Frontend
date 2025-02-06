import React from "react";
import { Dropdown, Navbar, Tab, Tabs } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../../style/teacher/activityItems.css"; // Updated CSS file

const AMNavigationBarComponent = () => {
  const navigate = useNavigate(); // React Router navigation
  const location = useLocation(); // Get current URL

  // Determine the active tab based on the current pathname
  const getActiveTab = () => {
    const path = location.pathname.replace("/", ""); // Remove "/"
    return path || "leaderboard"; // Default to "leaderboard" if no path
  };

  const handleSelect = (key) => {
    navigate(`/${key}`); // Navigate to the corresponding page
  };

  return (
    <Navbar expand="lg" className="class-navbar-top">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <i className="bi bi-arrow-left-circle"></i>
      </a>
      <p>Dashboard</p>

      <div className="navbar-center">
        <Tabs activeKey={getActiveTab()} onSelect={handleSelect} id="am-tabs" fill>
          <Tab eventKey="leaderboard" title="Leaderboard"></Tab>
          <Tab eventKey="items" title="Items"></Tab>
          <Tab eventKey="settings" title="Settings"></Tab>
        </Tabs>
      </div>

      <div className="dashboard-navbar">
        <span className="ping">20 ms</span>
        <a href="#"><i className="bi bi-moon"></i></a>
        <span className="student-badge">Student</span>
        <Dropdown align="end">
          <Dropdown.Toggle variant="transparent" className="profile-dropdown">
            <img src="/src/assets/angelica.png" className="profile-image" alt="Profile" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default AMNavigationBarComponent;
