import React, {useState} from 'react';
import {FaChevronCircleDown, FaChevronCircleUp} from 'react-icons/fa';

export const InfoSection = () => {
    const [open, setOpen] = useState(false);
    const [openBio, setOpenBio] = useState(false);


    const HandleClick = () => {
        if(!open){
            setOpen(true);
        }else{
            setOpen(false);
        }
    }
    const HandleClickBio = () => {
        if(!openBio){
            setOpenBio(true);
        }else{
            setOpenBio(false);
        }
    }
    console.log('test',open);
    return (
        <div className='w-11/12 mx-auto mt-36 text-white p-5'> 
            <div>
                <div className='flex items-center gap-1 cursor-pointer' onClick={HandleClick}>
                    {open ? (<FaChevronCircleDown className='text-md'/>) : (<FaChevronCircleUp className='text-md'/>)}
                    <h1 className='text-xl sm:text-2xl font-meduim'>What is the <span className='border-b-4 border-red-400'>Pomodoro</span> Method? </h1>
                </div>
                {open && (
                    <p className='mt-5 tracking-wide opacity-70 text-lg'>
                        The Pomodoro Technique was developed in the late 1980s by then university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.
                    </p>
                )}
                
            </div>
            <div className='pt-10'>
                <div className='flex items-center gap-1 cursor-pointer' onClick={HandleClickBio}>
                    {openBio ? (<FaChevronCircleDown className='text-md'/>) : (<FaChevronCircleUp className='text-md'/>)}
                    <h1 className='text-xl sm:text-2xl font-meduim'>What is the <span className='border-b-4 border-red-400'>Just Focus</span>?</h1>
                </div>
                {openBio && (
                    <p className='mt-5 tracking-wide opacity-70 text-lg'>
                        Wafer pie lemon drops cookie cheesecake gummies muffin cheesecake. Sweet apple pie danish chupa chups cupcake jujubes. Chocolate bar oat cake bear claw jelly beans sesame snaps.
                    </p>
                )}
            </div>
        </div>
    )
}