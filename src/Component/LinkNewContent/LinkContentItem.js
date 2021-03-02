import React from 'react';
import FastForwardIcon from '@material-ui/icons/FastForward';
import { Link } from 'react-router-dom';
import './LinkContentItem.css'
const LinkContentItem = (props) => {
    return (
        <div >
          {
              props.Data.map((item)=>
              <Link to={item.link} className="body-item-linkcontent">
                <div className="body-item-linkcontent-icon">
                    <FastForwardIcon/>
                </div>
                <div  className="body-item-linkcontent-title">
                
                        {
                            item.title
                        }
                </div>
        </Link>
              )
          }
        
        </div>
    );
};

export default LinkContentItem;