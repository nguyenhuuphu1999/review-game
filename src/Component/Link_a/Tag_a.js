import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
const Tag_a = (props) => {
    return (
        <div className="body-item-tag-a">
            <Link to={props.link}>
                <div className="a-item-tag-a">{props.title}</div>
            </Link>
        </div>
    );
};

export default Tag_a;