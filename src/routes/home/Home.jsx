import React from 'react';
import s from './Home.module.scss'
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    const task = (taskNumber, taskName, route) => {
      return (
        <div className={s.task}>
          <div>Task {taskNumber}</div>
          <div>{taskName}</div>
          <button onClick={() => navigate(route)}>Open</button>
        </div>
      )
    }

    return (
        <div className={s.wrapper}>
            {task('1', 'Countdown timer', '/timer')}
            {task('2', 'Welbex page', '/welbex')}
        </div>
    );
};
