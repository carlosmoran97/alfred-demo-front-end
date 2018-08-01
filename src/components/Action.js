import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);



class Action extends React.Component{
    handleFilterNotifications(e){
        e.preventDefault();
    }
    render() {
        return (
            <div className="contain">
                <form id="action__form" className="form-inline" onSubmit={this.handleFilterNotifications}>
                    <input className="" type="date" name="startDate"/>
                    <span>To&nbsp;</span>
                    <input className="" type="date" name="endDate" />
                    <button type="submit"><FontAwesomeIcon icon="arrow-right" /></button>
                </form>
          </div>
        );
    }
}

export default Action;