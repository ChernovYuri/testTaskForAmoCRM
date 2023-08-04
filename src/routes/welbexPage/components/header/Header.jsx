import React from 'react';
import s from './Header.module.scss'
import { useMediaQuery } from 'react-responsive';
import companyLogoLeftPart from '../../../../assets/icons/companyLogoLeftPart.svg'
import companyLogoRightPart from '../../../../assets/icons/companyLogoRightPart.svg'
import telegramIcon from '../../../../assets/icons/telegramIcon.svg'
import viberIcon from '../../../../assets/icons/viberIcon.svg'
import whatsappIcon from '../../../../assets/icons/whatsappIcon.svg'

export const Header = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1140 });
  const navMenu = () => {
    return (
      <div className={s.navMenu}>
        <div className={s.navMenu_el} title={'Услуги'}>Услуги</div>
        <div className={s.navMenu_el} title={'Виджеты'}>Виджеты</div>
        <div className={s.navMenu_el} title={'Интеграции'}>Интеграции</div>
        <div className={s.navMenu_el} title={'Кейсы'}>Кейсы</div>
        {!isMobile && <div className={s.navMenu_el} title={'Сертификаты'}>Сертификаты</div>}
      </div>
    );
  }

  return (
    <div className={isMobile? s.mobileHeader : s.desktopHeader}>
      {isMobile ? (
        <div className={s.mobileNavMenu}>
          {navMenu()}
        </div>
      ) : (
        <div className={s.content}>
          <div className={s.logoAndNav}>
            <div className={s.logoAndNav__logo}>
              <img src={companyLogoLeftPart} alt='Weblex'/>
              <img src={companyLogoRightPart} alt='Weblex'/>
            </div>
            {navMenu()}
          </div>
          <div className={s.contacts}>
            <div className={s.contacts__number}>
              {props.phoneNumber}
            </div>
            <div className={s.contacts__links}>
              <div className={s.link}>
                <img src={telegramIcon} alt='Telegram' title={'Telegram'}/>                
              </div>
              <div className={s.link}>
                <img src={viberIcon} alt='Viber' title={'Viber'}/> 
              </div>
              <div className={s.link}>
                <img src={whatsappIcon} alt='Whatsapp' title={'WhatsApp'}/>                   
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className={s.description}>
          крупный интегратор CRM <br />в России и ещё 8 странах
        </div>
      )}
    </div>
  );
};
