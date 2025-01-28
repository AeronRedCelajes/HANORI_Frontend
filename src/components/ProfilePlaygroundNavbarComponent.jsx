import React from 'react'
import { Navbar, Dropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/ProfilePlaygroundNavbar.css'

export const ProfilePlaygroundNavbarComponent = () => {
    
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
                    <Dropdown.Item href='#' onClick={handleProfileClick}>Boyet Profile Account</Dropdown.Item>
                    <Dropdown.Item href='#' onClick={handleHomeClick}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Navbar>
    </>
  )
}
