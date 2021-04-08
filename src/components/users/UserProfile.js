import React from 'react';
import './userProfile.css'

const UserProfile = ({firstName, lastName, picture, }) => {
    return (
        <div className="Profile">
            <div className="ProfileFixed">
                <img src={picture} alt={firstName} className="ProfilePhoto"/>
                <p className="ProfileFirstName">{firstName}</p>
                <p className="ProfileLastName">{lastName}</p>
            </div>
        </div>
    );
};

export default UserProfile;