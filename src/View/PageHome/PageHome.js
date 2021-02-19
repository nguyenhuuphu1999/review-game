import React from 'react';
import Logo from '../../Layout/Logo.js/Logo';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Navbar from '../../Layout/Navbar/Navbar'
const PageHome = () => {
    return (
        <div>
                <Grid item xs={12} sm={12} md={12}>
                    <Container>
                        <Logo/>
                        <Navbar/>
                    </Container>
                   
                </Grid>
                
        </div>
    );
};

export default PageHome;