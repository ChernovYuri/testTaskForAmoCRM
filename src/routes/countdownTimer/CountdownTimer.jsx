import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
    const [inputValue, setInputValue] = useState('')
    const [remainingSeconds, setRemainingSeconds] = useState(0)
  
    useEffect(() => {
        let intervalId;
        if ( remainingSeconds > 0) {
          intervalId = setInterval(() => {
            setRemainingSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000);
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [remainingSeconds]);

    const updateTime = () => {
        const remainingSeconds = inputValue.replace(/\D/g, '');

        if (remainingSeconds > 0) {
            setRemainingSeconds(remainingSeconds);
        }
        setInputValue('');
    };

    

    const formattedTime = () => {
        let hours = Math.floor(remainingSeconds / 3600);
        let minutes = Math.floor((remainingSeconds % 3600) / 60);
        let seconds = remainingSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

    return (
    <div style={{ margin: '50px 0 0 50px' }}>
      <input
        placeholder="Seconds"
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button onClick={updateTime}>
        Start
      </button>
      <br />
      <br />
      <span>{formattedTime()}</span>
    </div>
  );
};

/*
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {};
};

function updateTime(){
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds / 60);
  let seconds = seconds % 60;
  timerEl.textContent = `${hours}:${minutes}:${seconds}`;
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  alert('Время запущено:'+ hours + minutes + seconds +'сек.');
  animateTimer(seconds);

  inputEl.value = '';
});
*/