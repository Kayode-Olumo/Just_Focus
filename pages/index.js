import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Timer from "../components/Timer";
import { MediaNav } from "../components/MediaNav";
import InfoSection from "../components/InfoSection";
import { Alarm } from "../components/Alarm";
import SettingsModal from "../components/SettingsModal";

export default function Home() {
  const [POMODORO, SHORTBREAK, LONGBREAK] = [25, 5, 10];

  const [openSetting, setOpenSetting] = useState(false);
  const [timeCounter,setTimeCounter] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [pomodoro, setPomodoro] = useState(POMODORO);
  const [shortBreak, setShortBreak] = useState(SHORTBREAK);
  const [longBreak, setLongBreak] = useState(LONGBREAK);
  const [second, setSecond] = useState(0);
  const [tab, setTab] = useState(0);
  const [checkSecond, setCheckSecond] = useState(0)

  const alarmRef = useRef();
  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
	setPomodoro(pomodoroRef.current.value);
	setShortBreak(shortBreakRef.current.value);
	setLongBreak(longBreakRef.current.value);
};
  
  const getTime = () => {
    const timeTab = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeTab[tab];
  };

  const updateMinute = () => {
	const updateTab = {
		0: setPomodoro,
		1: setShortBreak,
		2: setLongBreak,
	  };
	  return updateTab[tab];
  }

const toggle = (index) => {
	const isSecond = checkSecond && tab !== index ? confirm("Are you sure you want to Switch tabs") : false;
	if(isSecond){
		reset();
		setTab(index)
	}else if(!checkSecond) {
		setTab(index);
	}
  };

  const reset = () => {
	  setCheckSecond(0)
	  setTimeCounter(false);
	  setSecond(0);
	  setPomodoro(POMODORO);
	  setShortBreak(SHORTBREAK);
	  setLongBreak(LONGBREAK)
  }

  const timeUp = () => {
	reset();
	setIsTimeUp(true);
	alarmRef.current.play();
  }

  const runTime = () => {
	  const mins = getTime();
	  const setMins = updateMinute();

	  if(mins === 0 && second === 0) {
		  timeUp();
	  }else if(second === 0 ){
		  setMins((min) => min - 1)
		  setSecond(59);
	  }else{
		  setSecond((second) => second -  1)
	  }
  }

  const startTimer = () => {
	  setIsTimeUp(false);
	  muteAlarm();
	  setTimeCounter((timeCounter) => !timeCounter)
  }

  const muteAlarm = () => {
	alarmRef.current.pause();
	alarmRef.current.currentTime = 0 ;
  }

  useEffect(() => {
	window.onbeforeunload = () => {
		return checkSecond ? "Show warning" : null;
	}

	const timer = setInterval(() => {
		if(timeCounter){
			setCheckSecond((value) => value + 1);
			runTime();
		}
		
	}, 1000);
	if (isTimeUp) {
		clearInterval(timer);
	}
	return () => {
		clearInterval(timer)
	}
  },[second, pomodoro, shortBreak, longBreak, timeCounter])

  const styles = {
    minScreen: "min-h-screen",
  };

  return (
    <div className={`bg-white-900 ${styles.minScreen} font-inter `}>
      <div className={`max-w-1xl ${styles.minScreen} mx-auto`}>
        <NavBar setOpenSetting={setOpenSetting} />
        <Timer tab={tab} toggle={toggle} getTime={getTime} second={second} timeCounter={timeCounter} startTimer={startTimer} muteAlarm={muteAlarm} isTimeUp={isTimeUp} reset={reset}/>
        <MediaNav />
        <InfoSection />
		<Alarm alarmRef={alarmRef}/>
		<SettingsModal pomodoroRef={pomodoroRef} shortBreakRef={shortBreakRef} longBreakRef={longBreakRef} openSetting={openSetting} setOpenSetting={setOpenSetting} updateTimeDefaultValue={updateTimeDefaultValue}/>
      </div>
    </div>
  );
}