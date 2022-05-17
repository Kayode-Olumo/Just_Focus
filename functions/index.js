import React, {useEffect, useState} from 'react';


export const toggle = (index) => {
  const isSecond = checkSecond && tab !== index ? confirm("Are you sure you want to Switch tabs") : false;
  if(isSecond){
      reset();
      setTab(index)
  }else if(!checkSecond) {
      setTab(index);
  }
};

export const getTime = () => {
  const timeTab = {
    0: pomodoro,
    1: shortBreak,
    2: longBreak,
  };
  return timeTab[tab];
};

export const updateMinute = () => {
  const updateTab = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateTab[tab];
}

export const reset = () => {
    setCheckSecond(0)
    setTimeCounter(false);
    setSecond(0);
    setPomodoro(25);
    setShortBreak(5);
    setLongBreak(10)
}

export const runTime = () => {
    const mins = getTime();
    const setMins = updateMinute();

    if(mins === 0 && second === 0) {
        reset();
    }else if(second === 0 ){
        setMins((min) => min - 1)
        setSecond(59);
    }else{
        setSecond((second) => second -  1)
    }
}

useEffect(() => {
  window.onbeforeunload = () => {
      return checkSecond ? "Show warning" : null;
  }

  const timer = setInterval(() => {
      if(timeCounter){
          setCheckSecond((value) => value + 1)
          runTime();
      }
      
  }, 1000);
  return () => {
    clearInterval(timer)
}
},[second, pomodoro, shortBreak, longBreak, timeCounter])

