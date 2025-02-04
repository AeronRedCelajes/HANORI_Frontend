import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Dropdown, Row, Tabs, Col, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDesktop, faBars } from '@fortawesome/free-solid-svg-icons';
import '/src/style/student/class.css'

export const ClassManagementComponent = () => {

    const navigate_dashboard = useNavigate();
    const handleDashboardClick = () => {
        navigate_dashboard('/dashboard');
    };

    const navigate_profile = useNavigate();
    const handleProfileClick = () =>{
        navigate_profile('/profile')
    }

    const navigate_home = useNavigate();
    const handleHomeClick = () =>{
        navigate_home('/home')
    }
    
    const [navkey, setNavKey] = useState('activities');
    const [contentkey, setContentKey] = useState('onging');

    return (
        <>
            <Navbar expand='lg' fixed='top' className='class-navbar-top'>
                <a href='#'><i className='bi bi-arrow-left-circle' onClick={handleDashboardClick}></i></a>
                <p>Dashboard</p>

                <div className='navbar-center'>
                    <Tabs defaultActiveKey={navkey} id="tab" onSelect={(k) => setNavKey(k)} fill>
                        <Tab eventKey="activities" title="Activities"></Tab>
                        <Tab eventKey="bulletin" title="Bulletin"></Tab>
                    </Tabs>
                </div>

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
                        <Dropdown.Item href='#' onClick={handleHomeClick}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>

            <div className='container class-content'>
                <Tabs defaultActiveKey={contentkey} id="tab" onSelect={(k) => setContentKey(k)} fill>
                    <Tab eventKey="ongoing" title="Ongoing"></Tab>
                    <Tab eventKey="completed" title="Completed"></Tab>
                </Tabs>
                <div className='activities'>
                    <Row>
                        <Col>
                            <h5>Activity Name</h5>
                        </Col>

                        <Col>
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </>
  )
}
