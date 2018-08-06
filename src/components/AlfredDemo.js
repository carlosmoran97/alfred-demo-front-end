import React from 'react';
import Profile from './Profile';
import Action from './Action';
import Notifications from './Notifcations';
import logo from '../images/alfred.png';
import profilePic from '../images/profilePic.png';
import $ from 'jquery';

export default class AlfreDemo extends React.Component{
    state = {
        notifications: []
    };
    componentDidMount(){
        // fetching notifications
        $.ajax({
            url: 'https://alfred-demo-api.herokuapp.com/api/notifications/',
            method: 'GET',
            dataType: 'JSON',
            success: (data) => {
                console.log(data);
            }
        });
        // if(json){
        //     if(json.length > 0){
        //         this.setState(() => ({
        //             notifications: json
        //         }));
        //     }
        // }
    };
    render(){
        return(
            <div className="row">
                <div className="col-lg-2 col-sm-3" style={{"padding":0}}>
                    <Profile
                        logo={logo}
                        profilePic={profilePic}
                        name={"Michael Scott"} 
                    />
                </div>
                <div className="col-lg-10 col-sm-9 secondCol">
                    <Action />
                    <Notifications
                        notifications={this.state.notifications}
                     />
                </div>
            </div>
        );
    }
}