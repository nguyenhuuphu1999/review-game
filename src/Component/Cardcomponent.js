import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin:'20px 0px'
    },
    media: {
      height: 200,
    },
  });
  
const Cardcomponent = (props) => {
    const classes = useStyles();
    
    return (
       <div style={{width:'100%',marginLeft:'28px'}}>
        <Grid container  >
           {
               (typeof props.data != 'undefined' && props.data != null)?
                props.data.map((item)=>
                    <Grid item xs={12} sm={12} md={4}>
                    <Link
                        style={{fontSize:"17px",outline:'none',fontWeight:'700'}}
                        href={item.link}>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={item.url_img}
                                title={item.title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h7" component="h8">
                                <Link
                                style={{fontSize:"17px",outline:'none',fontWeight:'700'}}
                                href={item.link}
                                    >
                                Trò chơi mèo đuổi chuột – tựa game xoay quanh những con...
                                </Link>
                                </Typography>
                            
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                        </Link>
                    </Grid>
                ):<></>
           }

        </Grid>
       </div>
    );
};

export default Cardcomponent;