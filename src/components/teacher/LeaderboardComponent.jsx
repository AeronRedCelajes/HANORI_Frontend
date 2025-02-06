import React, { useState, useEffect } from "react";
import { Dropdown, Navbar, Tab, Tabs } from "react-bootstrap";
import "../../style/teacher/leaderboard.css";
import AMNavigationBarComponent from './AMNavigationBarComponent';

const LeaderboardItem = ({ name, section, score, avatarUrl }) => {
  return (
    <tr>
      <td>
        <div className="avatar-name">
          <div className="avatar">
            <img
              src={avatarUrl || "src/assets/avatar.png"}
              alt="Avatar"
              className="avatar-image"
            />
          </div>
          <span className="student-name">{name}</span>
        </div>
      </td>
      <td>{section}</td>
      <td>
        <div className="score-circle">{score}%</div>
      </td>
      <td>
        <div className="score-circle">{score}%</div>
      </td>
    </tr>
  );
};

const Leaderboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://your-api-endpoint.com/activity-items";

  
const mockStudents = [
  {
    id: 1,
    name: "hu dat gorl",
    section: "4 BSCS - 1",
    score: 95,
    avatarUrl: "https://i.pinimg.com/736x/d6/44/f4/d644f4394ec89d85d7316f4548e80ef3.jpg",
  },
  {
    id: 2,
    name: "eme hAHSDHAHS",
    section: "4 BSCS - 2",
    score: 88,
    avatarUrl: "https://i.pinimg.com/1200x/5a/47/33/5a47339e55aae57d219b9c76ad4a019a.jpg",
  },
  {
    id: 3,
    name: "shhhhhh",
    section: "4 BSCS - 1",
    score: 76,
    avatarUrl: "https://i.pinimg.com/736x/6e/85/94/6e859491f84210eb38cccdfbcbee68c3.jpg",
  },
  {
    id: 4,
    name: "nAUR",
    section: "4 BSCS - 3",
    score: 92,
    avatarUrl: "https://i.pinimg.com/736x/41/f9/ed/41f9edf17d59620643b30c125f972bc3.jpg",
  },
];

  useEffect(() => {
    const fetchStudents = () => {
      setTimeout(() => {
        setStudents(mockStudents);
        setLoading(false);
      }, 500); 
    };

    fetchStudents();
  }, []);

  return (
    <div className="leaderboard-body">
      <AMNavigationBarComponent />
      <div className="leaderboard-container">
        <div className="leaderboard-header">
          <h1 className="leaderboard-title">Leaderboard</h1>
          {loading ? (
            <p>Loading students...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th className="leaderboard-column-titles">Student Name</th>
                  <th className="leaderboard-column-titles">Year & Section</th>
                  <th className="leaderboard-column-titles">Average Score</th>
                  <th className="leaderboard-column-titles">Rank</th>
                </tr>
              </thead>
              <tbody className="leaderboard-students">
                {students.map((student) => (
                  <LeaderboardItem
                    key={student.id}
                    name={student.name}
                    section={student.section}
                    score={student.score}
                    avatarUrl={student.avatarUrl}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};


const NavigationBar = ({ navKey, setNavKey, handleDashboardClick, handleProfileClick, handleHomeClick }) => (
  <Navbar expand='lg' className='class-navbar-top'>
    <a href="#" onClick={(e) => { e.preventDefault(); handleDashboardClick(); }}>
      <i className='bi bi-arrow-left-circle'></i>
    </a>
    <p>Dashboard</p>

    <div className='navbar-center'>
      <Tabs defaultActiveKey={navKey} id="tab" onSelect={(k) => setNavKey(k)} fill>
        <Tab eventKey="leaderboard" title="Leaderboard"></Tab>
        <Tab eventKey="item" title="Item"></Tab>
        <Tab eventKey="settings" title="Settings"></Tab>
      </Tabs>
    </div>

    <div className='dashboard-navbar'>
      <span className='ping'>20 ms</span>
      <a href="#"><i className='bi bi-moon'></i></a>
      <span className='student-badge'>Student</span>
      <Dropdown align='end'>
        <Dropdown.Toggle variant='transparent' className='profile-dropdown'>
          <img src='/src/assets/angelica.png' className='profile-image' alt="Profile" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); handleProfileClick(); }}>
            Boyet Profile Account
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </Navbar>
);


export default Leaderboard;
