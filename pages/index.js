import React, { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { Timer } from "../components/Timer";
import { MediaNav } from "../components/MediaNav";
import { InfoSection } from "../components/InfoSection";

export default function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [second, setSecond] = useState(0);
  const [tab, setTab] = useState(0);
  const [timeCounter,setTimeCounter] = useState(false);

  const toggle = (index) => {
    setTab(index);
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

  const runTime = () => {
	  const mins = getTime();
	  const setMins = updateMinute();

	  if(mins === 0 && second === 0) {
		  alert('times up');
	  }else if(second === 0 ){
		  setMins((min) => min - 1)
		  setSecond(59);
	  }else{
		  setSecond((second) => second -  1)
	  }
  }

  useEffect(() => {
	const timer = setInterval(() => {
		runTime();
	}, 1000);

	return () => {
		clearInterval(timer)
	}
  },[second, pomodoro, shortBreak, longBreak])

  const styles = {
    minScreen: "min-h-screen",
  };

  return (
    <div className={`bg-gray-900 ${styles.minScreen} font-inter `}>
      <div className={`max-w-1xl ${styles.minScreen} mx-auto`}>
        <NavBar />
        <Timer tab={tab} toggle={toggle} getTime={getTime} second={second} timeCounter={timeCounter} setTimeCounter={setTimeCounter}/>
        <MediaNav />
        <InfoSection />
      </div>
    </div>
  );
}
