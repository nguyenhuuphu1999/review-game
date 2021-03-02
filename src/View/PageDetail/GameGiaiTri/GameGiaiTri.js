import React from 'react';
import GameGiaiTriItem from './Other';
import './GameGiaiTri.css'
import { Container } from '@material-ui/core';
import Data  from './Data';
const GameGiaiTri = () => {
    return (
      <Container>
        <div className="body">
            <div >
                <h1 className="header">Game giải trí</h1>
                <div className="content">
                    <p  >Tổng hợp và chia sẻ các tựa game hay, thủ thuật chơi game và share acc game miễn phí. Nếu bạn đang cần cách chơi liên quân trên máy tính, các tài khoản cf vip… 
                    Thì cứ vào blog của mình lấy nhé!</p>
                </div>
            </div>
            <GameGiaiTriItem Data={Data}/>
        </div>
      </Container>
    );
};

export default GameGiaiTri;