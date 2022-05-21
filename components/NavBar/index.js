import React from 'react';
import {FiCommand, FiSettings} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';

function NavBar({
    setOpenSetting
}){
    const style = {
        textColor: 'text-black'
    }

    return(
    <nav className={`pt-5 pb-40 ${style.textColor} flex justify-between w-9/12 mx-auto`}>
        <CgProfile className='text-3xl cursor-pointer'/>
        <div className='flex items-center gap-1 cursor-pointer'>
            <FiCommand className='text-sm' />
            <h1>Just Focus</h1>
            
        </div>
        <FiSettings className='text-3xl cursor-pointer' onClick={() => setOpenSetting(true)}/>
    </nav>
    );
}    

export default React.memo(NavBar);