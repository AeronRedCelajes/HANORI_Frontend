import React, { useState, useEffect } from 'react';
import { ProfilePlaygroundNavbarComponent } from '../ProfilePlaygroundNavbarComponent';
import { Modal, Button } from 'react-bootstrap';
import '/src/style/student/profile.css';
import { getProfile, updateProfile, getUserRole } from '../api/API.js';

export const ProfileComponent = () => {
    const [showMain, setShowMain] = useState(false);
    const [showProfileDetails, setShowProfileDetails] = useState(false);
    const [profile, setProfile] = useState({
        name: '',
        studentNo: '',
        course: '',
        yearLevel: '',
        section: ''
    });
    const [formData, setFormData] = useState(profile);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // State for images
    const [coverImage, setCoverImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    // Fetch profile data on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            const userId = sessionStorage.getItem('user_id'); // Assuming user_id is stored in session
            const role = getUserRole();
            if (!userId || role !== 'student') return;

            const response = await getProfile(userId);
            if (response.error) {
                setError(response.error);
            } else {
                setProfile({
                    name: response.name || '',
                    studentNo: response.studentNo || '',
                    course: response.course || '',
                    yearLevel: response.yearLevel || '',
                    section: response.section || '',
                    coverImage: response.coverImage || null,
                    profileImage: response.profileImage || null
                });
                setFormData(response);
                setCoverImage(response.coverImage || null);
                setProfileImage(response.profileImage || null);
            }
            setLoading(false);
        };

        fetchProfile();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle cover image change
    const handleCoverChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle profile image change
    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle profile update
    const handleSaveChanges = async () => {
        const userId = sessionStorage.getItem('user_id');
        if (!userId) return;

        const updatedData = { 
            ...formData, 
            coverImage, 
            profileImage 
        };

        const response = await updateProfile(userId, updatedData);
        if (response.error) {
            setError(response.error);
        } else {
            setProfile(updatedData);
            setShowProfileDetails(false);
            setShowMain(false);
        }
    };

    return (
        <>
            <ProfilePlaygroundNavbarComponent />
            <div className='profile'>
                <div className='cover-container'>
                    <img src={coverImage || '/src/assets/univ.png'} alt="Cover" className="cover-image" />
                    <button type="button" className='btn' onClick={() => setShowMain(true)}>
                        Edit Profile <i className="bi bi-pencil"></i>
                    </button>
                </div>

                {loading ? (
                    <p>Loading profile...</p>
                ) : error ? (
                    <p className="error-text">{error}</p>
                ) : (
                    <div className='profile-container'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='container info-container'>
                                    <div className="profile-picture-container">
                                        <img src={profileImage || '/src/assets/angelica.png'} alt="Profile" className="profile-image" />
                                    </div>
                                    <div>
                                        <p className='name'>{profile.name}</p>
                                        <p className='student-no'>Student # {profile.studentNo}</p>
                                        <div className='details'>
                                            <p><b>Course:</b> {profile.course}</p>
                                            <p><b>Year Level:</b> {profile.yearLevel}</p>
                                            <p><b>Section:</b> {profile.section}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                )}

                {/* Edit Profile Modal */}
                <Modal show={showMain} onHide={() => setShowMain(false)} backdrop='static' keyboard={false} size='lg' className='modal-profile'>
                    <Modal.Header closeButton>
                        <p className='modal-title w-100 text-center'>Edit Profile</p>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='edit-button'>
                            <span>Cover Photo</span>
                            <Button>
                                <label htmlFor='cover-upload' className='upload-label'>
                                    Upload Photo
                                    <input id='cover-upload' type='file' accept='image/*' hidden onChange={handleCoverChange}/>
                                </label>
                            </Button>
                        </div>
                        <div className='edit-info'>
                            <img src={coverImage || '/src/assets/univ.png'} alt="Cover"/>
                        </div>
                    </Modal.Body>

                    <Modal.Body>
                        <div className='edit-button'>
                            <span>Profile Photo</span>
                            <Button>
                                <label htmlFor='profile-upload' className='upload-label'>
                                    Upload Photo
                                    <input id='profile-upload' type='file' accept='image/*' hidden onChange={handleProfileChange}/>
                                </label>
                            </Button>
                        </div>
                        <div className='edit-info'>
                            <img src={profileImage || '/src/assets/angelica.png'} alt="Profile"/>
                        </div>
                    </Modal.Body>

                    <Modal.Body>
                        <div className='edit-button'>
                            <span>Profile Details</span>
                            <Button onClick={() => setShowProfileDetails(true)}>Edit</Button>
                        </div>
                        <div className='edit-info'>
                            <p>{profile.name}</p>
                            <p>Student # {profile.studentNo}</p>
                            <p>{profile.course}</p>
                            <p>{profile.yearLevel}</p>
                            <p>{profile.section}</p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};