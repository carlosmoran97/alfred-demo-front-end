import React from 'react';

const Profile = (props) => (
    <div>
        <img id="logo" src={props.logo}></img>
        <img id="profilePic" src={props.porfilePic}></img>
        <p id="name">{props.name}</p>
        <p><img src={props.notificationsIcon}></img>Notifications</p>
    </div>
);
export default Profile;