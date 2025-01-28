import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Dropdown, Nav, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDesktop, faBars } from '@fortawesome/free-solid-svg-icons';
import '../style/dashboard.css'

export const DashboardComponent = () => {

    const navigate_sandbox = useNavigate();
    const handleSandboxClick = () => {
        navigate_sandbox('/sandbox');
    };

    const navigate_profile = useNavigate();
    const handleProfileClick = () => {
        navigate_profile('/profile');
    };

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [activeItem, setActiveItem] = useState('my-classes');

    return (
        <>
            <div className='dashboard'>
                <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                    <Nav className='flex-column sidebar-content'>
                        <Nav.Item className={`nav-item ${activeItem === 'my-classes' ? 'active' : ''}`} onClick={() => setActiveItem('my-classes')}>
                            <Nav.Link href='#' className='nav-link'>
                                <FontAwesomeIcon icon={faDesktop} className='sidebar-icon'/> My Classes
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className='nav-item' onClick={handleSandboxClick}>
                            <Nav.Link href='#' className='nav-link' >
                                <FontAwesomeIcon icon={faLaptopCode} className='sidebar-icon'/> Sandbox
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                
                
                <div className='dashboard-content'>
                    <Navbar expand='lg' fixed='top' className='navbar-top'>
                        <Button variant='transparent' className='toggle-btn' onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </Button>

                        <div className='dashboard-navbar'>
                            <span className='ping'>20 ms</span>
                            <a href='#'><i className='bi bi-moon'></i></a>
                            <span className='student-badge'>Student</span>
                            <Dropdown align='end'>
                                <Dropdown.Toggle variant='transparent' className='profile-dropdown'>
                                    <img src='/src/assets/angelica.png' className='profile-image'/>
                                </Dropdown.Toggle>
                                
                                <Dropdown.Menu>
                                <Dropdown.Item href='#' onClick={handleProfileClick}>Boyet Profile Account</Dropdown.Item>
                                <Dropdown.Item href='#'>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Navbar>

                    
                    <div className='container dashboard-content'>
                        <h5>Active Classes</h5>

                        <div className='classes-container'>
                            <Card className='class-card'>
                                <Card.Img variant='top' src='/src/assets/univ.png'/>
                                <Card.Body>
                                    <Card.Text>
                                        Class name <br/> Instructor's name
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Button variant='transparent' className='join-class'>
                                + Join a Class
                            </Button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}
