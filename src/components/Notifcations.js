import React from 'react';
import Notification from './Notification';

const Notifications = (props) => (
    <div className="contain contain--notifications">
        <table id="notifications__table" className="table table-striped">
            <thead className="notifications__header">
                <tr>
                    <th style={{width: "10%"}}>TYPE</th>
                    <th style={{width: "30%"}}>CLIENT</th>
                    <th style={{width: "20%"}}>DATE</th>
                    <th style={{width: "20%"}}>GENDER</th>
                    <th style={{width: "20%"}}>OPTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.notifications.map((notification) => {
                        return (
                            <Notification
                                key={notification.id}
                                notification={notification}
                            />
                        );
                    })
                }
            </tbody>
        </table>
    </div>
);

export default Notifications;