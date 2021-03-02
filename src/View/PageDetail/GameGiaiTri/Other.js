import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
       padding:'9px',
       border:'1px solid #E5E6E7',
       borderRadius:'10px'
    },
  });
const GameGiaiTriItem = (props) => {
    const classes = useStyles();
    console.log( props.Data)
    return (
        <div>
            <div style={{padding:'20px 0px'}}>
                <h2 >Bài viết liên quan</h2>
            </div>
            <div>
             
               
                    <Grid container spacing={3}>
                        {
                           props.Data.map((item)=>
                            <Grid item xs={12} sm={6} md={3} style={{padding:'17px'  }}>
                                <Card className={classes.root}>
                                    <Link to={item.link}>
                                        <CardActionArea>
                                                <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={item.img}
                                                title="Contemplative Reptile"
                                                />
                                                <CardContent className="title" style={{paddingTop:'10px' }}>
                                                    <Typography variant="body2" color="textSecondary" component="p" style={{padding:'10px',height:'80px'}}>
                                                    {item.title}
                                                    </Typography>
                                                </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            </Grid>    
                            )
                        }
                    </Grid>
            
            </div>
        </div>
    );
};

export default GameGiaiTriItem;