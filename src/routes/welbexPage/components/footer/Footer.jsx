import React from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './Footer.module.scss';
import telegramIcon from '../../../../assets/icons/telegramIcon.svg';
import viberIcon from '../../../../assets/icons/viberIcon.svg';
import whatsappIcon from '../../../../assets/icons/whatsappIcon.svg';
import telegramIconLarge from '../../../../assets/icons/telegramIconLarge.svg';
import viberIconLarge from '../../../../assets/icons/viberIconLarge.svg';
import whatsappIconLarge from '../../../../assets/icons/whatsappIconLarge.svg';

export const Footer = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

    return (
      <div className={isMobile ? s.mobileFooter : s.desktopFooter}>
        <div className={s.main}>
          <div className={s.footerEl}>
            <div className={s.footerEl__title}>О компании</div>
            <div className={s.footerEl__links}>
              <div className={s.footerEl__links__link} title={'Партнёрская программа'}>Партнёрская программа</div>
              <div className={s.footerEl__links__link} title={'Вакансии'}>Вакансии</div>
            </div>
          </div>
          <div className={s.footerEl}>
            <div className={s.footerEl__title}>Меню</div>
            <div className={s.footerEl__links}>
              <div className={s.footerEl__links__link} title={'Расчёт стоимости'}>Расчёт{isMobile? <br/> : ' '}стоимости</div>
              <div className={s.footerEl__links__link} title={'Услуги'}>Услуги</div>
              <div className={s.footerEl__links__link} title={'Виджеты'}>Виджеты</div>
              <div className={s.footerEl__links__link} title={'Интеграции'}>Интеграции</div>
              <div className={s.footerEl__links__link} title={'Наши клиенты'}>Наши клиенты</div>
              <div className={s.footerEl__links__link} title={isMobile ? 'Благодарность клиентов' : 'Кейсы'}>
                {isMobile ? <>Благодарность<br/>клиентов</> : 'Кейсы'}
              </div>
              <div className={s.footerEl__links__link} title={isMobile ? 'Кейсы' : 'Благодарственные письма'}>
                {isMobile ? 'Кейсы' : 'Благодарственные письма'}
              </div>
              <div className={s.footerEl__links__link} title={'Сертификаты'}>Сертификаты</div>
              <div className={s.footerEl__links__link} title={'Блог на Youtube'}>Блог на Youtube</div>
              <div className={s.footerEl__links__link} title={'Вопрос / Ответ'}>Вопрос / Ответ</div>
            </div>
          </div>
        </div>
          <div className={s.footerEl}>
            <div className={s.footerEl__contacts}>
              <div className={s.footerEl__title}>Контакты</div>
              <div className={s.footerEl__contacts__links}>
                <div className={s.footerEl__contacts__links__number}>
                  {props.phoneNumber}
                </div>
                <div className={s.footerEl__contacts__links__socials}>
                  <div className={s.link}>
                    <img src={isMobile ? telegramIconLarge : telegramIcon} alt='Telegram' title={'Telegram'}/> 
                  </div>
                  <div className={s.link}>
                    <img src={isMobile ? viberIconLarge : viberIcon} alt='Viber' title={'Viber'}/> 
                  </div>
                  <div className={s.link}>
                    <img src={isMobile ? whatsappIconLarge : whatsappIcon} alt='Whatsapp' title={'WhatsApp'}/> 
                  </div>
                </div>
                <div className={s.footerEl__contacts__links__address}>
                  Москва, Путевой проезд 3c1, к 902
                </div>
              </div>
            </div>
            <div className={s.rights}>
              <div className={s.rights__title}>
                ©WELBEX 2022. Все права защищены.
              </div>
              <div className={s.rights__privacyPolicy} title={'Политика конфиденциальности'}>
                Политика конфиденциальности
              </div>
            </div>
          </div>
      </div>
    );
};
