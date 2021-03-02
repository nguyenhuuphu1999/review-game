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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const Reward = (props) => {
    const classes = useStyles();

    console.log(props.Data)
    return (
        <div>
            
            
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    {
                        props.Data.map((item,index)=>
                        <div style={{width:'95%'}}>
                            <Grid container  style={{marginTop:'10px',borderRadius:'10px'}} className="hi">
                                <Grid item xs={12} sm={2} md={2} className="item" style={{display:'flex',alignItems:'end',justifyContent:'center'}}>
                                   <div className={(index==0)?"parent1":(index==1)?"parent2":(index==2)?"parent3":(index==3)?"parent4":''}>
                                        <div  className={(index==0)?"child1":(index==1)?"child2":(index==2)?"child3":(index==3)?"child4":''}>
                                            {index+1}
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} className="item" >
                                   
                                      
                                   
                                    <div><img style={{maxWidth:"150px",borderRadius:'8px'}} src={item.img}/></div>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} className="item" style={{borderRight:'1px solid #CCCCCC', borderLeft:'1px solid #CCCCCC',display:'flex',alignItems:'center',justifyContent:'center'}} className="sm:border-none md:border-none" >
                                    <div style={{fontWeight:700,color:'#EB2F06',fontFamily:'sans-serif'}}>{item.name}</div>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} className="item"  style={{borderRight:'1px solid #CCCCCC'}}>
                                <Rating name="read-only" value={5} readOnly />
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} className="item" style={{display:'flex',flexDirection:'column'}}>
                                   
                                    <Link to={item.linkplay}>
                                        <Button variant="contained" color="secondary"  style={{marginTop:'10px',textTransform:'capitalize',width:'155px'}}>
                                          <CloudDownloadIcon style={{marginRight:'10px'}}/> Tải Game
                                        </Button>
                                    </Link>
                                        <br></br>
                                    <Link to={item.review}>
                                        <Button variant="contained" color="secondary" style={{marginBottom:'10px',textTransform:'capitalize',width:'155px'}}>
                                           <ArrowForwardIcon style={{marginRight:'10px'}}/> Review
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