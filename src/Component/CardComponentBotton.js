import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      boxShadow:'10px 10px 10px -6px',
      marginTop:"20px"
    },
    media: {
      height: 140,
      marginTop:'10px'
    },
  });
const CardComponentBotton = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
       <>
       {
           props.Data.map((item)=>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.title}
                    <div style={{display:'flex',justifyContent:'center',margin:'10px 0px'}}>
                            <Rating name="read-only" value={5} readOnly />
                    </div>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent:'center'}}>
                   <Link to={item.linkPlay}>
                        <Button variant="outlined" color="secondary">
                            Chơi ngay
                        </Button>
                   </Link>
                   
                   <Link to={item.linkReview}>
                    <Button variant="outlined" >
                                Xem review
                        </Button>
                   </Link>
                </CardActions>
            </Card>
           )
       }
       </>
          
    );
};

export default CardComponentBotton;