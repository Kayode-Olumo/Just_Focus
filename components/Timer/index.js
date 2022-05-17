import React from 'react';

export const Timer = ({tab, toggle, getTime, second, timeCounter, setTimeCounter}) => {
    const options = ["Pomodoro","Short Break","Long Break"];

    return (
        <div className='w-10/12 mx-auto pt-5 text-white flex flex-col justify-center items-center'>
            <div className='flex gap-5 items-center'>
                {options.map((option, index) =>{
                    return <h1 key={index} onClick={() => toggle(index)} className={`${index === tab && "bg-gray-500 bg-opacity-30"} p-1 cursor-pointer transition-all rounded`}>{option}</h1>
                })}
            </div>
            <div className='mt-10 mb-10'>
                <h1 className='text-8xl font-bold select-none m-0'>{getTime()}:{second.toLocaleString('en-GB', { minimumIntegerDigits: 2, useGrouping: false })}</h1>
            </div>
            <button className='px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold' onClick={() => setTimeCounter((timeCounter) => !timeCounter)}>
                {timeCounter ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}