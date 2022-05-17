import React from 'react';

export const Alarm = ({alarmRef}) => {
    return (
        <audio ref={alarmRef}>
            <source src="/alarm.mp3" type='audio/mp3'/>
            Your browser does not support the audio element.
        </audio>
    )
}