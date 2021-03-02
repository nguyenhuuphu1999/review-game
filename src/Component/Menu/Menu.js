import React,{useState} from 'react';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import './Menu.css'
import { Button } from '@material-ui/core';
const Menu = (props) => {

    const [hidden,setHidden] = useState(false)

    console.log(props.DataMenu)
    console.log(props.DataMenuItem)
    const handleHidden =() =>{
        setHidden(!hidden)
        console.log( hidden)
    }
    return (
        <div>
           <div className="body-item">
                <div style={{width:"76px"}}>Mục lục</div>
               {
                   (hidden)?
                   <div className="content">
                    <ol>
                        <li><a href="#a">Những tính năng nổi bật làm nên giá trị riêng biệt của B52 Club</a>
                            <ol>
                                <li><a href="#ab">Giao diện khoa học, sang trọng và vô cùng hiện đại</a></li>
                                <li><a href="#ac">An toàn thông tin tuyệt đối</a></li>
                                <li><a href="#ad">Chính sách khuyến mại, ưu đãi khủng</a></li>
                                <li><a href="#ae">Tỷ lệ thanh toán ưu đãi 1 : 1 diễn ra nhanh chóng</a></li>
                                <li><a href="#af">Chính sách chăm sóc khách hàng 24/7</a></li>
                            </ol>
                        </li>
                           
                        <li><a href="#b">B52 Club – cả một thế giới game bất tận</a>
                            <ol>
                                <li><a href="#ba">Game slot đổi thưởng </a></li>
                                <li><a href="#bb">Mini game đổi thưởng </a></li>
                                <li><a href="#bc">Game casino </a></li>
                                <li><a href="#bd">Game quay số </a></li>
                                <li><a href="#be">Game bài bom tấn </a></li>

                            </ol>
                        </li>
                            
                        <li> <a href="#c">Cách tải B52 Club</a>
                            <ol>
                                <li> <a href="#ca">Hệ điều hành Androi</a></li>
                                <li> <a href="#cb">Hệ điều hành iOS</a></li>
                                <li> <a href="#cc">Link tải B52 Club APK</a></li>
                            </ol>
                        </li>
                            
                        <li> <a href="#d">Hướng dẫn đăng ký chơi B52 online</a></li>
                        <li> <a href="#e">Cách nạp và rút tiền tại cổng game B52</a>
                            <ol>
                                <li>  <a href="#ea"> Nạp tiền tại cổng game B52 Club</a></li>
                                <li>  <a href="#eb"> Rút tiền tại cổng game B52 Club</a></li>
                            </ol>
                        </li>
                            
                        <li> <a href="#f">Game bài B52 có uy tín hay không?</a></li>
                        <li> <a href="#h">Tỷ lệ chiến thắng, căn cầu tại B52</a></li>
                        <li> <a href="#g">Mẹo kiếm tiền khủng tại cổng game b52.</a>
                            <ol>
                                    <li><a href="#ga"> Tận dụng chương trình khuyến mại của nhà cái B52</a></li>
                                    <li> <a href="#gb">Tính toán xác suất thắng thua trong sòng bài</a></li>
                                </ol>
                        </li>
                            
                        <li> <a href="#i">Kết luận</a></li>

                    </ol>
                </div>:<></>
               }
                <div className="icon-item">
                   <Button onClick={handleHidden}>
                        <FormatListNumberedIcon />
                   </Button>
                </div>
           </div>
        </div>
    );
};

export default Menu;

// import React,{useState} from 'react';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import './Menu.css'
// import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// const Menu = (props) => {

//     const [hidden,setHidden] = useState(false)

//     // console.log(props.DataMenu)
//     // console.log(props.DataMenuItem[9].link.split('')[1])
//     const handleHidden =() =>{
//         setHidden(!hidden)
//         console.log( hidden)
//     }
//     var linktemp= ''
//     var i =0;

//     const get_item_child = (linktemp)=>{
      
//         props.DataMenuItem.map((item,index)=>
//         (item.link.split('')[1] == linktemp)?
//         <li>hi {item.link.split('')[1]}</li>:''
//         )
//     }


//     return (
//         <div>
//            <div className="body-item">
//                 <div style={{width:"76px"}}>Mục lục</div>
//                {
//                    (hidden)?
//                    <div className="content">
//                     <ol>
//                         {
//                          props.DataMenu.map((item_parent,index_parent)=>
                               
//                                     <li>  <a href={item_parent.link}>{item_parent.title + " " +item_parent.link.split('')[1] }</a>
//                                         {
//                                             linktemp = item_parent.link.split('')[1],
                                            
//                                            <ol>
//                                                {
//                                                 (props.DataMenuItem[index_parent].link.split('')[1] == item_parent.link.split('')[1])?
                                                
//                                                 props.DataMenuItem.map((item,index)=>
//                                                     (item.link.split('')[1] == linktemp)?
//                                                         <li> {item.title }</li>:''
//                                                     ) 
//                                                 :''
//                                                }
//                                            </ol>
                                               
                                            
//                                         }
//                                     </li>
                               
//                             )
                           
//                         }
//                     </ol>
//                 </div>:<></>
//                }
//                 <div className="icon-item">
//                    <Button onClick={handleHidden}>
//                         <FormatListNumberedIcon />
//                    </Button>
//                 </div>
//            </div>
//         </div>
//     );
// };

// export default Menu;


// props.DataMenuItem.map((itemchild,index)=>
// {
//    {  console.log(item.title)}
//     //console.log(item.link.split('')[1])
//     if(item.link.split('')[1] == itemchild.link.split('')[1])
//         <ol>
//             <li>
//                 <a href={itemchild.link}>sdd</a>
//                 {
                  
//                     console.log(index,itemchild.title)

//                 }

//             </li>
//         </ol> 
        
    
// }
 




 {/* props.DataMenu.map((item_parent,index_parent)=>
                               
                                    <li>  <a href={item_parent.link}>{item_parent.title + " " +item_parent.link.split('')[1] }</a>
                                        {
                                            linktemp = item_parent.link.split('')[1],
                                            
                                           <ol>
                                               {
                                                (props.DataMenuItem[index_parent].link.split('')[1] == item_parent.link.split('')[1])?
                                                        props.DataMenuItem.map((item,index)=>
                                                        (item.link.split('')[1] == linktemp)?
                                                        <li>hi {item.link.split('')[1]}</li>:''
                                                        )
                                                :''
                                               }
                                           </ol>
                                               
                                            
                                        }
                                    </li>
                               
                            ) */}