import React from 'react';
import Cardcomponent from '../Cardcomponent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Data from './DataGame'
const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });
  
const Game = () => {
    return (
        <div>
            <div>
            <Typography variant="h4" color="textSecondary" style={{padding:'20px 0px'}} >
                Game
            </Typography>
            </div>
                <Cardcomponent data={Data}/>
        </div>
    );
};

export default Game;