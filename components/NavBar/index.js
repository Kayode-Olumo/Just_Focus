import React from 'react';
import {FiCommand, FiSettings} from 'react-icons/fi';

export const NavBar = () => {
    const style = {
        textColor: 'text-white'
    }

    return(
    <nav className={`pt-5 ${style.textColor} flex justify-between w-9/12 mx-auto`}>
        <div className='flex items-center gap-1 cursor-pointer'>
            <FiCommand className='text-sm' />
            <h1>Just Focus</h1>
            
        </div>
        <FiSettings className='text-3xl cursor-pointer'/>
    </nav>
    );
}    