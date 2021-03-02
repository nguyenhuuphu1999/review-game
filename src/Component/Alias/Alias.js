import React from 'react';
import { Link } from 'react-router-dom';
import './Alias.css'
const Alias = (props) => {
    console.log(props.Data.length)
    return (
        <div className="body-item-alias">
            {
                props.Data.map((item,index)=>
                (
                    <>
                    <Link to={item.link} className="a-item">
                        <p> {item.title}</p>
                    </Link>  
                    
                   {
                       (index+1 < props.Data.length)? 
                       <p className="p-item">
                            >>
                        </p> :<></>
                   }
                    
                  
                </>
                )
                )
            }
        </div>
    );
};

export default Alias;