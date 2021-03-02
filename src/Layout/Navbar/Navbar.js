import React, { useState } from 'react';
import { MenuItems} from './MenuItem'
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.css'
import { Container, Grid } from '@material-ui/core';
import Data from './Data';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
const Navbar = () => {

    const [clicked , setClicked] = useState(true)
    const handleClick = () =>{
        setClicked(!clicked)
        console.log(clicked)
    }
    const [active,setActive] = useState('hello')
    const handleActive = (link) =>{
       setActive(link)
    }
    return (
        
        <div className="NavbarItems" style={{height:'50px'}}>
           
            {/* <h1 className="navbar-logo">
                <Link to="/">
                    <HomeIcon className="navbar-logo-icon"  />
                </Link>
            </h1> */}
            <div className="menu-icon" onClick={handleClick}>
                {(clicked)?<MenuIcon />:<ExitToAppIcon/>}
            </div>
            <Grid container spacing={3} style={{width:'100%' ,height:'100%'}}>
                <Grid lg={10}  className="grid">
                    <ul className={(clicked==false)?"nav-menu active" : "nav-menu"}>
                        {
                            Data.DataNavbar.map(item=>
                            <Link to={item.link} onClick={()=>{handleActive(item.link)}} className={active == item.link ? "a-link active" : "a-link"}>
                                <li className="nav-links "> {item.title}</li>
                            </Link>
                            )
                        }
                    </ul>
                </Grid>
                <Grid md={12} sm={12} lg={2}>
                   <div className="body-icon">
                        <input type="text" className="input-icon"/>
                        <SearchIcon className="icon-search"/>
                      
                   </div>
                </Grid>
            </Grid>
           

          
        </div>
    );
};

export default Navbar;


// <ul className={(clicked==false)?"nav-menu active" : "nav-menu"}>

// {/* <li className="nav-links"><a href="/game">GAME GIẢI TRÍ</a>
// <div style={{height:'19px',position:'absolute', width:'119px'}}></div>

//     <ul className="nav-menu-links-child">
//        {
//            (Data.Datalist1.map((item)=>
//             <Link to={item.link}>
//                 <li>{item.title}</li>
//             </Link>
        
//            ))
//        }
//     </ul>
// </li>
// <li className="nav-links"><a href="/gameslot">GAME SLOT </a>
// <div style={{height:'19px',position:'absolute', width:'119px'}}></div>

//     <ul className="nav-menu-links-child1">
   
//     {
//            (Data.Datalist2.map((item)=>
//            <Link to={item.link}>
//                 <li>{item.title}</li>
//            </Link>
        
//            ))
//        }
//     </ul>
// </li>
// <li className="nav-links"><a href="#">GAME THỂ THAO</a>
// <div style={{height:'19px',position:'absolute', width:'119px'}}></div>

//     <ul className="nav-menu-links-child2">
//         {
//            (Data.Datalist3.map((item)=>
//            <Link to={item.link}>
//                 <li>{item.title}</li>
//            </Link>
            
//            ))
//        }
//     </ul>
// </li> */}

// {
//     Data.DataNavbar.map(item=>
//     <Link to={item.link}>
//         <li className="nav-links"> {item.title}</li>
//     </Link>
//     )
// }

// </ul>