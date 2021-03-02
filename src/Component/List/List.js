import React from 'react';
import './Style.css'
const List = (props) => {
   console.log(props.Data)
    return (
        <div>
           {
               (props.type == "")?
               <ul className="ul_list_item">
               {
                   props.Data.map((item,index)=>
                        <li>Buớc {index+1} : {item}</li>
                   )               
                }
            </ul>:(props.type=="+")?
            
            <ul className="ul_list_item">
               {
                   props.Data.map((item,index)=>
                        <li >+ {item}</li>
                   )               
                }
            </ul>:
            <ul className="ul_list_item">
               {
                   props.Data.map((item,index)=>
                        <li style={{listStyle:"disc"}}> {item}</li>
                   )               
                }
            </ul>
        
           }
        </div>
    );
};

export default List;