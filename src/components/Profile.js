import React from 'react';
import notificationsIcon from '../images/notification.png';

const Profile = (props) => (
    <div className="contain container--profile">
        <img id="logo" src={props.logo}></img>
        <img id="profilePic" src={props.profilePic}></img>
        <p id="name">{props.name}</p>
        <p id="notificationText"><img id="notificationsIcon" src={notificationsIcon}></img>Notifications</p>
    </div>
);
export default Profile;