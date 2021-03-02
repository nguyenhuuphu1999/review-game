import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import Game from '../../Component/Game/Game';
import MobileTips from '../../Component/MobileTips/MobileTips';

const PageHome = (props) => {

    return (
        <div>
                <Grid item xs={12} sm={12} md={12}>
               
                  
                    <Container>                    
                        <Game/>
                        <MobileTips/>
                      
                    </Container>
                   
                </Grid>
                
        </div>
    );
};

export default PageHome;