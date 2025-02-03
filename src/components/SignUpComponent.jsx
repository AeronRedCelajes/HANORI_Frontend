import React from 'react'
import '../style/signup.css'
import { useNavigate } from 'react-router-dom'

export const SignUpComponent = () => {

    const navigate_signin = useNavigate();
    const handleSignInClick = () => {
        navigate_signin('/signin');
    }

    return (
        <>
            <div className='container-fluid vh-100 d-flex p-0'>
                <div className='col-md-7 d-none d-md-block p-0'>
                    <img src='/src/assets/univ.png' alt='University' className='w-100 h-100' style={{ objectFit: 'cover' }} ></img>
                </div>
                
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <div className='form-container'>

                        <div className='d-flex justify-content-center'>
                            <img src='/src/assets/HANR_LOGO-4.png' alt='University' className='w-50 h-50'></img>
                        </div>

                        <h3 className='text-center mb-3'>Sign Up to Hanori</h3>
                        
                        <form className='signup-form'>
                            <div className='form-group'>
                                <label for='firstname'>First Name</label>
                                <input type='text' id='firstname' className='form-control' placeholder='ex. Angelica Mae' required></input>
                            </div>

                            <div className='form-group'>
                                <label for='lastname'>Last Name</label>
                                <input type='text' id='lastname' className='form-control' placeholder='ex. Manliguez' required></input>
                            </div>

                            <div className='form-group'>
                                <label for='email'>NEU Email</label>
                                <input type='email' id='email' className='form-control' placeholder='user@abc.com' required></input>
                            </div>

                            <div className='form-group'>
                                <label for='password'>Password</label>
                                <input type='password' id='password' className='form-control' placeholder='*********' required></input>
                            </div>

                            <div className='form-group'>
                                <label for='password'>Confirm Password</label>
                                <input type='password' id='password' className='form-control' placeholder='*********' required></input>
                            </div>

                            <button type='submit' className='w-100 custom-button' onClick={handleSignInClick}>Sign Up</button>

                            <p>Have an account already? <a href='#' onClick={handleSignInClick}>Sign In</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
