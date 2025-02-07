import React from 'react'
import { Navbar, Dropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '/src/style/ProfilePlaygroundNavbar.css'

export const ProfilePlaygroundNavbarComponent = () => {
    
    const navigate_dashboard = useNavigate();
    const handleDashboardClick = () => {
        navigate_dashboard('/dashboard');
    };

  return (
    <>
        <Navbar expand='lg' className='profile-playground-navbar'>
            <a href='#'><i className='bi bi-arrow-left-circle' onClick={handleDashboardClick}></i></a>
            <p>Dashboard</p>

            <div className='dashboard-navbar'>
                <span className='ping'>20 ms</span>
                <a href='#'><i className='bi bi-moon'></i></a>
            </div>
        </Navbar>
    </>
  )
}
