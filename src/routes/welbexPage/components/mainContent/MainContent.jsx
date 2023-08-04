import React from 'react';
import s from './MainContent.module.scss'
import { useMediaQuery } from 'react-responsive';


export const MainContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 715 });

  const mobileBalls = () => {
    return (
      <>
        <div className={s.purpleBall}></div>
        <div className={s.redBall}></div>
        <div className={s.redLightBall}></div>
        <div className={s.purpleLightBall}></div>
      </>
    )
  }

  const mainText = () => {
    return (
      <div className={s.text}>
        <div className={s.text__main}>
          Зарабатывайте больше<br/>
          <span className={s.text__main__special}>c WELBEX</span>
        </div>
        <div className={s.text__footer}>
          Развиваем и контролируем<br/>продажи за вас
        </div>
    </div>
    )
  }

  const consultation = () => {
    return (
      <div className={s.consultation}>
      <div className={s.consultation__title}>
        Вместе c <span className={s.consultation__title__special}>
          бесплатной<br/>консультацией
        </span> мы дарим:
      </div>
      <div className={s.gifts}>
        <div className={s.gifts__el}>
          <div className={s.gifts__el__title}>
            {isMobile && <span className={s.line}/>}{isMobile ? 'Skype аудит' : 'Виджеты' }
          </div>
          {!isMobile && <div className={s.gifts__el__description}>
            30 готовых<br/>решений
          </div>}
        </div>
        <div className={s.gifts__el}>
          <div className={s.gifts__el__title}>
            {isMobile && <span className={s.line}/>}{isMobile ? '30 виджетов' : 'Dashboard' } 
          </div>
          {!isMobile && <div className={s.gifts__el__description}> с показателями<br/>вашего бизнеса
          </div>}
        </div>
        <div className={s.gifts__el}>
          <div className={s.gifts__el__title}>
            {isMobile && <span className={s.line}/>}{isMobile ? 'Dashboard' : 'Skype аудит'}
          </div>
          {!isMobile && <div className={s.gifts__el__description}>отдела продаж<br/>и CRM системы</div>}
        </div>
        <div className={s.gifts__el}>
          <div className={s.gifts__el__title}>
            {isMobile && <span className={s.line}/>}{isMobile ? 'Месяц amoCRM' : '35 дней'}
          </div>
          {!isMobile && <div className={s.gifts__el__description}>использования<br/>CRM</div>}
        </div>
      </div>
    {!isMobile && <button className={s.consultationButton} title={'Получить консультацию'}>
      Получить консультацию
      </button>}
    </div>
    )
  }

  return (
        <div className={isMobile ? s.mobileContent : s.desktopContent}>
          {isMobile && <div className={s.glass}>
            {mobileBalls()}
          </div>}
          <div className={s.content}>
            {mainText()}
            {consultation()}
          </div>
      </div>
    );
};
