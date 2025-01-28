import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Dropdown, Button } from 'react-bootstrap';
import '../style/profile.css'
 
export const ProfileComponent = () => {

    const navigate_dashboard = useNavigate();
    const handleDashboardClick = () => {
        navigate_dashboard('/dashboard');
    };

    return (
        <>
            <Navbar expand='lg' className='navbar-profile'>
                <a href='#'><i className='bi bi-arrow-left-circle' onClick={handleDashboardClick}></i></a>
                <p>Dashboard</p>

                <div className='dashboard-navbar'>
                    <span className='ping'>20 ms</span>
                    <a href='#'><i className='bi bi-moon'></i></a>
                    <span className='student-badge'>Student</span>
                    <Dropdown align='end'>
                        <Dropdown.Toggle variant='transparent' className='profile-dropdown'>
                            <img src='/src/assets/angelica.png' className='profile-image'/>
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                        <Dropdown.Item href='#'>Boyet Profile Account</Dropdown.Item>
                        <Dropdown.Item href='#'>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>
            
            <div className='profile'>
                <div className='cover-container'>
                    <button type="button" className='btn'>Edit Profile <i className="bi bi-pencil"></i></button>
                </div>

                <div className='profile-container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='container info-container'>
                                <div className="profile-picture-container"></div>
                                <div>
                                    <p className='name'>Angelica Mae Manliguez</p>
                                    <p className='student-no'>Student # 21-14329-587</p>
                                    
                                    <div className='details'>
                                        <p><b>Course:</b> BS Computer Science</p>
                                        <p><b>Year Level:</b> 4th Year</p>
                                        <p><b>Section:</b> 4-BSCS-1</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-8'>
                            <div className='container performance-container'>
                                <div className='performance-content'>   
                                    <p className='title'>Performance</p>
                                    <span className='border border-dark'></span>
                                    <div className='analysis'>
                                        <h4>Graph Analysis</h4>
                                        <div className='row graph'>
                                            <div className='col-7 linear'>
                                                <img src='/src/assets/graph.png' alt='graph'/>
                                            </div>
                                            <div className='col-3 bar'>
                                                <img src='/src/assets/bar.png' alt='bar'/>
                                            </div>
                                        </div>
                                        <h6>Strengths</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <h6>Weaknesses</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>

                                <div className='history-content'>
                                    <p className='title'>History</p>
                                    <span className='border border-dark'></span>

                                    <div className='history-table'>
                                        <div class="table-responsive">
                                            <table class="table table-sm table-hover">
                                            <thead>
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Assessment</th>
                                                <th scope="col">Scores</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">1</th>
                                                <td>Java Prog</td>
                                                <td>If-Else</td>
                                                <td>95</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">2</th>
                                                <td>Python</td>
                                                <td>Basic Python</td>
                                                <td>97</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
