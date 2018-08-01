import React from 'react';

class Action extends React.Component{
    handleFilterNotifications(e){
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFilterNotifications}>
                    <input type="date" name="startDate"/>
                    To
                    <input type="date" name="endDate" />
                    <button className="btn btn-primary" type="submit">Filter</button>
                </form>
          </div>
        );
    }
}

export default Action;