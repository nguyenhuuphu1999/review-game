import React from 'react';
import CardComponentBotton from '../CardComponentBotton';
import Top from '../TopComponent/Top';

const TopGame = (props) => {
    return (
        <div style={{paddingTop:'10px'}}>
            <Top name="TOP GAME"/>
            <CardComponentBotton Data={props.Data}/>
        </div>
    );
};

export default TopGame;