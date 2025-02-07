import React, { useState } from 'react'
import { ProfilePlaygroundNavbarComponent } from '../ProfilePlaygroundNavbarComponent'
import {Modal, Button} from 'react-bootstrap'
import '/src/style/student/profile.css'
 
export const ProfileComponent = () => {

    const [showMain, setShowMain] = useState(false);
    const [showProfileDetails, setShowProfileDetails] = useState(false);

    return (
        <>
            <ProfilePlaygroundNavbarComponent/>
            <div className='profile'>
                <div className='cover-container'>
                    <button type="button" className='btn' onClick={() => setShowMain(true)}>Edit Profile <i className="bi bi-pencil"></i></button>
                </div>

                <Modal show={showMain} onHide={() => setShowMain(false)} backdrop='static' keyboard={false} size='lg' className='modal-profile'>
                    <Modal.Header className='w-100 text-center' closeButton>
                        <p className='modal-title w-100'>Edit Profile</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='edit-button'>
                            <span>Cover Photo</span>
                            <Button>
                                <label htmlFor='file-upload' className='upload-label'>
                                    Upload Photo
                                    <input id='file-upload' type='file' accept='image/*' hidden/>
                                </label>
                            </Button>
                        </div>
                        <div className='edit-info'>
                            <img src='/src/assets/univ.png'/>
                        </div>
                    </Modal.Body>

                    <Modal.Body>
                        <div className='edit-button'>
                            <span>Profile Photo</span>
                            <Button>
                                <label htmlFor='file-upload' className='upload-label'>
                                    Upload Photo
                                    <input id='file-upload' type='file' accept='image/*' hidden/>
                                </label>
                            </Button>
                        </div>
                        <div className='edit-info'>
                            <img src='/src/assets/angelica.png'/>
                        </div>
                    </Modal.Body>

                    <Modal.Body>
                        <div className='edit-button'>
                            <span>Profile Details</span>
                            <Button onClick={() => setShowProfileDetails(true)}>Edit</Button>
                        </div>
                        <div className='edit-info'>
                            <p>Angelica Mae Manliguez</p>
                            <p>Student # 21-14329-587</p>
                            <p>BS Computer Science</p>
                            <p>4th Year</p>
                            <p>4-BSCS-1</p>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={showProfileDetails} onHide={() => setShowProfileDetails(false)} backdrop='static' keyboard={false} size='lg' className='custom-modal-edit'>
                    <Modal.Header className='w-100 text-center' closeButton>
                        <p className='modal-title w-100'>Edit your details</p>
                    </Modal.Header>

                    <Modal.Body className='body-details'>
                        <label>Name: </label>
                        <input type='text' placeholder='Ex. Angelica Mae Manliguez' className='form-control'/>
                        
                        <label>Student #: </label>
                        <input type='text' placeholder='Ex. 21-14329-582' className='form-control'/>
                    
                        <label>Course: </label>
                        <input type='text' placeholder='Ex. BS Computer Science' className='form-control'/>

                        <label>Year Level: </label>
                        <input type='text' placeholder='Ex. 4th Year' className='form-control'/>

                        <label>Section: </label>
                        <input type='text' placeholder='Ex. 4-BSCS-1' className='form-control'/>
                    </Modal.Body>

                    <Modal.Footer className='custom-modal-footer'>
                        <Button>Save Changes</Button>
                    </Modal.Footer>
                </Modal>

                <div className='profile-container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='container info-container'>
                                <div className="profile-picture-container"></div>
                                <div>
                                    <p className='name'>Angelica Mae Manliguez</p>
                                    <p className='student-no'>Professor # 21-14329-587</p>
                                    
                                    <div className='details'>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-8'>
                            
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}
