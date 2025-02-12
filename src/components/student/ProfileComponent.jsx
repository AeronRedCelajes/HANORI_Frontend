import React, { useState, useEffect } from 'react';
import { ProfilePlaygroundNavbarComponent } from '../ProfilePlaygroundNavbarComponent';
import { Modal, Button } from 'react-bootstrap';
import { getProfile, updateProfile } from '../api/API.js'; // Import API functions
import '/src/style/student/profile.css';

export const ProfileComponent = () => {
    const defaultProfileImage = '/src/assets/noy.png';
    const defaultCoverImage = '/src/assets/univ.png';

    const [showEditModal, setShowEditModal] = useState(false);
    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        student_num: '',
        program: '',
        profileImage: '',
        coverImage: '',
        email: '', // Not editable
        newPassword: ''
    });

    const [newProfileImage, setNewProfileImage] = useState(null);
    const [newCoverImage, setNewCoverImage] = useState(null);
    const [showNewPassword, setShowNewPassword] = useState(false); // Toggle for new password input

    // Fetch user profile on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getProfile();
            if (!data.error) {
                setProfile({
                    ...data,
                    profileImage: data.profileImage || defaultProfileImage,
                    coverImage: data.coverImage || defaultCoverImage,
                });
            } else {
                console.error("Failed to fetch profile:", data.error);
            }
        };
        fetchProfile();
    }, []);

    // Handle input changes for new password only
    const handleInputChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    // Handle file uploads
    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            if (type === 'profile') {
                setNewProfileImage(file);
            } else if (type === 'cover') {
                setNewCoverImage(file);
            }
        }
    };

    // Save profile changes
    const handleSaveChanges = async () => {
        const updatedProfile = { ...profile };

        // Convert images to Base64 before sending
        const convertToBase64 = (file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        };

        if (newProfileImage) {
            updatedProfile.profileImage = await convertToBase64(newProfileImage);
        }
        if (newCoverImage) {
            updatedProfile.coverImage = await convertToBase64(newCoverImage);
        }

        const response = await updateProfile(updatedProfile);
        if (!response.error) {
            alert("Profile updated successfully!");
            setShowEditModal(false);
            setProfile(response);
        } else {
            alert("Failed to update profile: " + response.error);
        }
    };

    return (
        <>
            <ProfilePlaygroundNavbarComponent />
            <div className='profile'>

                {/* Cover Image Section */}
                <div className='cover-container' style={{ backgroundImage: `url(${profile.coverImage})` }}>
                    <button type="button" className='btn' onClick={() => setShowEditModal(true)}>
                        Edit Profile <i className="bi bi-pencil"></i>
                    </button>
                </div>

                {/* Edit Profile Modal */}
                <Modal show={showEditModal} onHide={() => setShowEditModal(false)} backdrop='static' keyboard={false} size='lg' className='modal-profile'>
                    <Modal.Header closeButton>
                        <p className='modal-title w-100'>Edit Profile</p>
                    </Modal.Header>

                    <Modal.Body>
                        {/* Cover Image Upload */}
                        <div className='edit-button'>
                            <span>Cover Photo</span>
                            <Button>
                                <label htmlFor='cover-upload' className='upload-label'>
                                    Upload Photo
                                    <input id='cover-upload' type='file' accept='image/*' hidden onChange={(e) => handleFileChange(e, 'cover')} />
                                </label>
                            </Button>
                        </div>
                        <img src={newCoverImage ? URL.createObjectURL(newCoverImage) : profile.coverImage} className='preview-image' alt="Cover Preview" />

                        {/* Profile Image Upload */}
                        <div className='edit-button'>
                            <span>Profile Photo</span>
                            <Button>
                                <label htmlFor='profile-upload' className='upload-label'>
                                    Upload Photo
                                    <input id='profile-upload' type='file' accept='image/*' hidden onChange={(e) => handleFileChange(e, 'profile')} />
                                </label>
                            </Button>
                        </div>
                        <img src={newProfileImage ? URL.createObjectURL(newProfileImage) : profile.profileImage} className='preview-image' alt="Profile Preview" />

                        {/* Profile Details Edit */}
                        <div className='edit-details'>
                            <label>First Name:</label>
                            <input type='text' name='firstname' value={profile.firstname} onChange={handleInputChange} className='form-control' />

                            <label>Last Name:</label>
                            <input type='text' name='lastname' value={profile.lastname} onChange={handleInputChange} className='form-control' />

                            <label>Student #:</label>
                            <input type='text' name='student_num' value={profile.student_num} onChange={handleInputChange} className='form-control' />

                            <label>Program:</label>
                                <select
                                    name="program"
                                    value={profile.program}
                                    onChange={handleInputChange}
                                    className="form-control"
                                >
                                    <option value="">Select Program</option>
                                    <option value="BSCS">BSCS</option>
                                    <option value="BSIT">BSIT</option>
                                    <option value="BSEMC">BSEMC</option>
                                    <option value="BSIS">BSIS</option>
                                </select>

                            {/* New Password (Editable) */}
                            <label>New Password:</label>
                            <div className="password-field">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    name="newPassword"
                                    value={profile.newPassword || ""}
                                    onChange={handleInputChange}
                                    className='form-control'
                                    placeholder="Enter new password"
                                />
                                <i
                                    className={`bi ${showNewPassword ? "bi-eye-slash" : "bi-eye"}`}
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                ></i>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>

                {/* Profile Display Section */}
                <div className='profile-container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='container info-container'>
                                <div className="profile-picture-container" style={{ backgroundImage: `url(${profile.profileImage})` }}></div>
                                <div>
                                    <p className='name'>{profile.firstname} {profile.lastname}</p>
                                    <p className='student-no'>Student # {profile.student_num}</p>
                                    <p><b>Program:</b> {profile.program}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};