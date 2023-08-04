import React from 'react';
import s from './WelbexPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Header } from './components/header/Header';
import { MainContent } from './components/mainContent/MainContent';
import { Footer } from './components/footer/Footer';


export const WelbexPage = () => {
    const phoneNumber = '+7 555 555-55-55';
    const isMobile = useMediaQuery({ maxWidth: 1140 });
    const isMobileBalls = useMediaQuery({ maxWidth: 715 });

    return (
        <div className={s.wrapper}>
            {!isMobileBalls &&
            <div className={s.desktopBalls}>
                <div className={s.redLightBall}></div>
                <div className={s.purpleLightBall}></div>
                <div className={s.blueBall}></div>
                <div className={s.redBallLarge}></div>
                <div className={s.redBall}></div>
            </div>}
            <div className={isMobile ? s.mobileContainer : s.desktopContainer}>
                <Header phoneNumber={phoneNumber} />
                <MainContent />
                <Footer phoneNumber={phoneNumber} />
            </div>
        </div>
        
    );
};


