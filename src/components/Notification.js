import React from 'react';
import typeCall from '../images/Type.png';
import typeMessage from '../images/typeMessage.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
library.add(faCheck);

export default class Notification extends React.Component{
    state = {
        notification: this.props.notification
    };
    handleChangeState = () => {
        $.ajax({
            url: `https://alfred-demo-api.herokuapp.com/api/notifications/${this.state.notification.id}/`,
            type: 'PUT',
            data: {
                status: "hecho"
            },
            dataType: 'JSON',
            success: (data) => {
                this.setState((prevState, props) => {
                    prevState.notification.status = data[0].status;
                    return {
                        notification: prevState.notification
                    };
                });
            }
        });
    }
    typeIcon(type){
        let typeicon = undefined;
        switch(type){
            case "message":
                typeicon = typeMessage;
                break;
            case "call":
                typeicon = typeCall;
                break; 
        }
        return typeicon;
    }
    generateGenderAlert(gender){
        let genderAlert = undefined;
        switch(gender){
            case "man":
                genderAlert = (
                    <div 
                        className="alert alert-primary notification__gender"
                        role="alert"
                        style={{"borderRadius":"25px"}}
                    >
                        Man
                    </div>
                );
            break;
            case "woman":
                genderAlert = (
                    <div
                        className="alert alert-danger notification__gender"
                        role="alert"
                        style={{"borderRadius":"25px"}}
                    >
                        Woman
                    </div>
                );
            break;
        }
        return genderAlert;
    }
    generateStatusButton(status){
        let statusButton = undefined;
        switch(status){
            case "por hacer":
                statusButton = (
                    <button
                        className="statusPorHacerButton border border-primary"
                        onClick={this.handleChangeState}
                    >
                        <FontAwesomeIcon icon="check" />
                    </button>
                );
            break;
            case "hecho":
            statusButton = (
                <button
                    className="statusHechoButton border border-primary"
                    onClick={this.handleChangeState}
                    disabled={true}
                >
                    <FontAwesomeIcon icon="check" />
                </button>
            );
            break;
        }
        return statusButton;
    }
    timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = Math.floor(seconds / 31536000);
      
        if (interval > 1) {
          return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
    render(){
        return(
            <tr>
                <td>
                    <img
                        src={this.typeIcon(this.state.notification.notificationType)}
                        style={{"width":"40px","height":"40px","borderRadius":"50%"}}
                    ></img>
                </td>
                <td className="clientName">
                    {this.state.notification.senderClient.fullName}
                </td>
                <td className="notifDate">
                    {
                        `${this.timeSince(new Date(this.state.notification.createdAt))} ago`
                    }
                </td>
                <td className="clientGender">
                    {
                        this.generateGenderAlert(this.state.notification.senderClient.gender)
                    }
                </td>
                <td>
                    {
                        this.generateStatusButton(this.state.notification.status)
                    }
                </td>
            </tr>
        );
    }   
}