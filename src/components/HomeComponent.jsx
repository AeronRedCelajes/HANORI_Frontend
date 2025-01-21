import React from 'react';
import '../style/home.css';
import { NavbarComponent } from './NavbarComponent';
import { HeaderComponent } from './HeaderComponent';
import { FeaturesComponent } from './FeaturesComponent';
import { AboutComponent } from './AboutComponent';
import { FooterComponent } from './FooterComponent';

    export const HomeComponents = () => {
    return (
        <>
            <div className="landing-page">
                < NavbarComponent />
                <div className='header-orange-border'>
                    <div className="header-section">
                        <HeaderComponent/>
                    </div>
                </div>
            
                <div className="features-section">
                    <FeaturesComponent/>
                </div>
                
                <div className='about-orange-border'>
                    <div className='about-section'>
                        <AboutComponent />
                    </div>
                </div>

                <div className='footer-section'>
                    <FooterComponent/>
                </div>
            </div>
        </>
  )
}
