import React, { useState } from 'react';
import { MenuItems} from './MenuItem'
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.css'

const Navbar = () => {
    const [clicked , setClicked] = useState(true)
    const handleClick = () =>{
        setClicked(!clicked)
        console.log(clicked)
    }
    return (
        <div className="NavbarItems" style={{height:'50px'}}>
            <h1 className="navbar-logo">
                <HomeIcon className="navbar-logo-icon"/>
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                {(clicked)?<MenuIcon />:<ExitToAppIcon/>}
            </div>

            <ul className={(clicked==false)?"nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item,index)=>
                      
                        <li className={item.cName}><a key={index}   href={item.url}/>{item.title}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Navbar;