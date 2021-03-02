import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './Footer/Footer';
import Logo from './Layout/Logo/Logo';
import Slide from './Layout/Slider/Slider'
import Navbar from './Layout/Navbar/Navbar';
import { Container } from '@material-ui/core';
import PageHome from './View/PageHome/PageHome';
import Game from './View/PageDetail/GameGiaiTri/GameGiaiTri.js';
import GameSlot from './View/PageDetail/GameSlot/GameSlot'
import GilfCode from './View/PageDetail/GiftCode/GiftCode';
import GameB52 from './View/PageDetail/GameB52/GameB52'
import GameBanCa from './View/PageDetail/GameBanCa/GameBanCa'
import Go88 from './View/PageDetail/Go88/Go88';
import Zbet from './View/PageDetail/Zbet/Zbet.js'
import VicWin from './View/PageDetail/Vic-Win/Vic-Win'
import GameDanhBai from './View/PageDetail/GameDanhBai/GameDanhBai'
import RicWin from './View/PageDetail/Ric-Win/Ric-Win'
import Top88 from './View/PageDetail/Top88/Top88'
import Club from './View/PageDetail/789Club/789Club'
import MayClub from './View/PageDetail/MayClub/MayClub'
import NhatVip from './View/PageDetail/NhatVip/NhatVip'
import ZoWin from './View/PageDetail/ZoWin/ZoWin'
import RikVip from './View/PageDetail/RikVip/RikVip'
import NhaCai from './View/PageDetail/NhaCai/NhaCai'
import Yo88 from './View/PageDetail/Yo88/Yo88'
import GameTaiXiu from './View/PageDetail/GameTaiXiu/GameTaiXiu'
import BomTanWin from './View/PageDetail/BomTanWin/BomTanWin'

import SunWin from './View/PageDetail/SunWin/SunWin'
import NoHuClub from './View/PageDetail/NoHuClub/NoHuClub'
import Fa88 from './View/PageDetail/Fa88/Fa88'
import MacauClub from './View/PageDetail/MacauClub/MacauClub'
import Lixi88 from './View/PageDetail/Lixi88/Lixi88'
import FanVip from './View/PageDetail/FanVip/FanVip'
import NgonClub from './View/PageDetail/NgonClub/NgonClub'
import KingFun from './View/PageDetail/KingFun/KingFun'
import NagaVip from './View/PageDetail/NagaVip/NagaVip'

import Sv88 from './View/PageDetail/Sv88/Sv88'
import R88 from './View/PageDetail/R88/R88'
import Five88 from './View/PageDetail/Five88/Five88'
import Red88 from './View/PageDetail/Red88/Red88'
import Vn88 from './View/PageDetail/Vn88/Vn88'
import Lucky88 from './View/PageDetail/Lucky88/Lucky88'
import Nbet from './View/PageDetail/Nbet/Nbet'
import Lode88 from './View/PageDetail/Lode88/Lode88'
import Sky88 from './View/PageDetail/Sky88/Sky88'
import Bong99 from './View/PageDetail/Bong99/Bong99'
import Best789 from './View/PageDetail/Best789/Best789'
import GameBanC from './View/GameGiaiTri/GameBanCa/GameBanCa'
import GameCaMap from './View/GameGiaiTri/GameCaMap/GameCaMap'
import GameChemTraiCay from './View/GameGiaiTri/GameChemTraiCay/GameChemTraiCay'
import GameLamBanh from './View/GameGiaiTri/GameLamBanh/GameLamBanh'
import GameChuoiMeo from './View/GameGiaiTri/GameMounseHunt/GameChuoiMeo'
import GamePUBG from './View/GameGiaiTri/GamePubg/GamePUBG'
import GameRanSanMoi from './View/GameGiaiTri/GameRanSanMoi/Game-ran-san-moi'
import GameThoiTrang from './View/GameGiaiTri/GameThoiTrang/GameThoiTrang'
import GameXeTang from './View/GameGiaiTri/GameXeTang/GameXeTang'
import { useEffect, useState } from 'react';
import Temp from './Temp';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


 
  console.log(window.location.pathname)

  return (
    <div>
        <Temp/>
        <Router>
           
            <Switch>
                <Route path="/" exact>
                   <Navbar/>
                   <Slide/>
                  <PageHome/>
                </Route>

                <Route path="/game">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               
                   <Game/>
                </Route>

                <Route path="/gameslot">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameSlot/>
                </Route>

                <Route path="/gilfcode">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GilfCode/>
                </Route>

                <Route path="/b52club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameB52/>
                </Route>

                <Route path="/game-ban-ca">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameBanCa/>
                </Route>

                <Route path="/go-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Go88/>
                </Route>

                <Route path="/zbet">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Zbet/>
                </Route>

                <Route path="/vic-win">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <VicWin/>
                </Route>

                <Route path="/game-bai-doi-thuong">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameDanhBai/>
                </Route>

                <Route path="/ric-win">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <RicWin/>
                </Route>

                <Route path="/top-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Top88/>
                </Route>

                <Route path="/789-club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Club/>
                </Route>

                <Route path="/may-club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <MayClub/>
                </Route>

                <Route path="/nhat-vip">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <NhatVip/>
                </Route>

                <Route path="/zo-win">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <ZoWin/>
                </Route>

                <Route path="/rik-vip">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <RikVip/>
                </Route>

                <Route path="/nha-cai-uy-tin">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <NhaCai/>
                </Route>

                <Route path="/yo-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Yo88/>
                </Route>

                <Route path="/game-tai-xiu">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameTaiXiu/>
                </Route>

                <Route path="/bom-tan-win">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <BomTanWin/>
                </Route>

                <Route path="/sun-win">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <SunWin/>
                </Route>

                <Route path="/no-hu-club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <NoHuClub/>
                </Route>

                <Route path="/ma-cau-club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <MacauClub/>
                </Route>

                <Route path="/li-xi-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Lixi88/>
                </Route>

                <Route path="/ngon-club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <NgonClub/>
                </Route>

                <Route path="/king-fun">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <KingFun/>
                </Route>

                <Route path="/na-ga-vip">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <NagaVip/>
                </Route>

                <Route path="/fan-vip">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <FanVip/>
                </Route>

                <Route path="/fa88-club">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Fa88/>
                </Route>

                ???

                <Route path="/sv-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Sv88/>
                </Route>

                <Route path="/r88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <R88/>
                </Route>

                <Route path="/five-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Five88/>
                </Route>

                <Route path="/red-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Red88/>
                </Route>

                <Route path="/vn-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Vn88/>
                </Route>

                <Route path="/lucky-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Lucky88/>
                </Route>

                <Route path="/n-bet">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Nbet/>
                </Route>

                <Route path="/lode-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Lode88/>
                </Route>

                <Route path="/sky-88">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Sky88/>
                </Route>

                <Route path="/bong-99">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Bong99/>
                </Route>

                <Route path="/789best">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <Best789/>
                </Route>

                

                <Route path="/ban-ca">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameBanC/>
                </Route>

                <Route path="/game-ca-map">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameCaMap/>
                </Route>

                <Route path="/game-chem-trai-cay">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameChemTraiCay/>
                </Route>

                <Route path="/game-lam-banh">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameLamBanh/>
                </Route>

                <Route path="/game-chuot-meo">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameChuoiMeo/>
                </Route>

                <Route path="/game-pubg">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GamePUBG/>
                </Route>

                <Route path="/game-ran-san-moi">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameRanSanMoi/>
                </Route>

                <Route path="/game-thoi-trang">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameThoiTrang/>
                </Route>

                <Route path="/game-xe-tang">
               <Navbar/>
                  <Container>
                  <Logo/>
               </Container>
               

                   <GameXeTang/>
                </Route>

            </Switch>
            <Footer/>
        </Router>




    </div>
  );
}

export default App;










