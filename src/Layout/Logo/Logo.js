import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <div> 
                    <img width="100%" src="./Image/78WIN-LOGO.jpg" />
                </div>
            </Link>
        </div>
    );
};

export default Logo;