import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import Other from '../GameGiaiTri/Other'
import Data from './DataGilfCode'
const GiftCode = () => {
    return (
        <div>
            <Container className="body">
                <h1 className="h1">Gift Code</h1>
                <Other  Data={Data}/>
            </Container>
        </div>
    );
};

export default GiftCode;