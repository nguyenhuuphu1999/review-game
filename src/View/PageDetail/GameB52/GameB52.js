import { Container } from '@material-ui/core';
import React from 'react';
import Alias from '../../../Component/Alias/Alias';
import Reward from '../../../Component/Reward/RewardItem';
import Data from './Data';
import Grid from '@material-ui/core/Grid';
import TopGame from '../../../Component/TopGame/TopGame';
import GameB52Item from './GameB52Item';
import LinkContent from '../../../Component/LinkNewContent/LinkContent';

const GameB52 = () => {
    return (
        <div>
            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={9} md={9}>
                        <Alias Data={Data.DataAlias}/>
                        <Reward Data={Data.DataReward}/>
                        <GameB52Item/>
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

export default GameB52;