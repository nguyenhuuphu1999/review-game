import React from 'react';
import './Top.css'
const Top = (props) => {
    return (
    <div className="body-Item-parent">
            <div className="body-Item-child">
                {props.name}
            </div>
    </div>
    );
};

export default Top;