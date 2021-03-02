import React from 'react';
import Cardcomponent from '../Cardcomponent';
import Data from './Data';
import Typography from '@material-ui/core/Typography';
const MobileTips = () => {
    return (
        <div>
            <div>
            <Typography variant="h4" color="textSecondary" style={{padding:'20px 0px'}} >
            Thủ thuật mobile
            </Typography>
            </div>
            <Cardcomponent data = {Data}/>
        </div>
    );
};

export default MobileTips;