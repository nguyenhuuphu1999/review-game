import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{backgroundColor:"#232323" ,color:"#fff"}}>
           <Grid container  >
               <Container style={{display:'flex',padding:'40px 0px'}}>
                <Grid item xs={4} sm={4} md={4} style={{padding:'0px 20px'}}>
                    <Typography variant="h7" gutterBottom style={{lineHeight:'30px'}}>
                    Kiemtinh.com là blog review tất cả thể loại game và thể thao hàng đầu hiện nay. Chúng tôi không phải là tổ chức nào đó, chúng tôi chỉ mang lại những giá trị cho bạn
                    </Typography>
                </Grid> 
                    <Grid item xs={4} sm={4} md={4}>
                        <div  className="border">
                            <Typography gutterBottom variant="h6" component="h2" >
                                TOP GAME THỂ THAO
                            </Typography>
                        </div>
                        <div >
                                <ul className="footer_item">
                                    <li>- <a href='#'>Five88</a></li>
                                    <li>- <a href="#">R88</a></li>
                                    <li>- <a href="#">Red88</a></li>
                                    <li>- <a href="#">Bong99</a></li>
                                    <li>- <a href="#">Nbet</a></li>

                                </ul>
                            </div>
                        
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <div >
                            <Typography gutterBottom variant="h6" component="h2" className="border" >
                                TOP GAME BÀI
                            </Typography>
                        </div>
                        <div>
                                <ul  className="footer_item">
                                    <li>- <a href="#">Game bài</a></li>
                                    <li>- <a href="#">B52 Game</a></li>
                                    <li>- <a href="#">789 Club</a></li>
                                    <li>- <a href="#">Sunwin</a></li>
                                    <li>- <a href="#">Go88</a></li>
                                    <li>- <a href="#">Nhà cái uy tín</a></li>

                                </ul>
                            </div>
                    </Grid>  
               </Container>
              
            </Grid>
           <div style={{background:'black'}}>
           <Grid container>
                <Container style={{display:'flex'}}>
                    <Grid item xs={6} sm={6} md={6} style={{padding:'10px 20px'}}>© Kiemtinh.com ( Powered by Blog KT 2019 )</Grid>
                    <Grid item xs={6} sm={6} md={6} style={{padding:'10px 20px'}}>
                        <div style={{display:'flex' , flexDirection:'row-reverse',justifyContent:'space-between'}}>
                            <div>789 Bet</div>
                            <div>Game Slot</div>
                            <div>Game bài</div>
                            <div>Game bắn cá</div>
                            <div>Sunwin</div>
                            <div>Go88</div>
                        </div>
                    </Grid>
                </Container>
           </Grid>
           </div>
        </div>
    );
};

export default Footer;