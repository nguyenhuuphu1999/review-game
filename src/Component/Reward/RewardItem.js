import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './Reward.css';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ForwardIcon from '@material-ui/icons/Forward';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const Reward = (props) => {
    const classes = useStyles();

    console.log(props.Data)
    return (
        <div style={{paddingTop:'10px'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:"#FFFFFF", boxShadow:"10px 10px 10px -7px"}}>
                    {
                        props.Data.map((item,index)=>
                        <div style={{width:'95%'}}>
                            <Grid container  style={{marginTop:'10px',borderRadius:'10px'}} className="hi">
                                
                                <Grid item xs={12} sm={4} md={4} className="item">
                                    <div><img style={{maxWidth:"150px",borderRadius:'8px'}} src={item.img}/></div>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} className="item" style={{flexDirection:'column',display:'flex',lineHeight:'25px',justifyContent:'center'}} className="sm:border-none md:border-none" >
                                    <div style={{fontWeight:700,fontFamily:'sans-serif'}}>{item.name}</div>
                               
                                    <Rating name="read-only" value={5} readOnly style={{marginTop:'12px'}} />
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} className="item" style={{display:'flex',flexDirection:'column'}}>
                                   
                                    <Link to={item.linkPlay}>
                                        <Button variant="contained" color="secondary"  style={{marginTop:'10px'}}>
                                           <CloudDownloadIcon style={{marginRight:'10px'}}/> Chơi ngay
                                        </Button>
                                    </Link>
                                        <br></br>
                                    <Link to={item.linkReview}>
                                        <Button variant="contained" color="secondary" style={{marginBottom:'10px'}}>
                                            <ForwardIcon/> Xem review
                                        </Button>
                                    </Link>
                                   
                                </Grid>
                            </Grid>
                        </div>
                        )
                    }
                </div>
         
        </div>
    );
};

export default Reward;