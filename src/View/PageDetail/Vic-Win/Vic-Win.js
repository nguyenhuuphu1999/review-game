import React from 'react';
import Grid from '@material-ui/core/Grid';
import Alias from '../../../Component/Alias/Alias';
import Data from './Data'
import { Container } from '@material-ui/core';
import Reward from '../../../Component/Reward/RewardItem'
import WinItem from './Vic-WinItem';
import LinkContent from '../../../Component/LinkNewContent/LinkContent';
import TopGame from '../../../Component/TopGame/TopGame';

const vicWin = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={9} md={9}>
                        <Alias Data={Data.DataAlias}/>
                        <Reward Data={Data.DataReward}/>
                        <WinItem/>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                    
                            <TopGame Data={Data.DataTopGame}/>
                            <div style={{margin:'20px 0px'}}>
                                    <LinkContent Data={Data.DataLinkContent}/>
                            </div>
                       
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default vicWin;