import React, { Profiler } from 'react';
import './userProfile.css';
import moment from 'moment';


const UserProfile = ({firstName, lastName, picture, userData, }) => {
    return (
        <div className="Profile">
            <div className="ProfileFixed">
                <img src={picture} alt={firstName} className="ProfilePhoto"/>
                <p className="ProfileFirstName">{firstName} {lastName}</p>
                {userData && (
                    <div className="UserData">
                        <p className="ProfileLastName">{userData.phone}</p>
                        <p className="ProfileLastName">{userData.location.country}</p>
                        <p className="ProfileLastName">{userData.gender}</p>
                        <p className="ProfileLastName">{userData.email}</p>
                        <p className="ProfileLastName">{moment(userData.dateOfBirth).format('LLL')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;