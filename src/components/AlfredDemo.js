import React from 'react';
import Profile from './Profile';
import Action from './Action';
import Notifications from './Notifcations';

export default class AlfreDemo extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-2">
                    <Profile />
                </div>
                <div className="col-10">
                    <Action />
                    <Notifications />
                </div>
            </div>
        );
    }
}