import React from 'react';
import {FaSpotify} from 'react-icons/fa';
import {RiTodoLine} from 'react-icons/ri';

function MediaNav({setOpenSpotify}){
    console.log(setOpenSpotify(), "hi")
    const style = {
        textColor: 'text-black'
    }
    return(
    <div>
        <nav className={`pt-10 ${style.textColor} flex justify-between w-2/12 mx-auto`}>
            <div className='flex items-center gap-1 cursor-pointer'>
                <FaSpotify className='text-2xl' onClick={() => setOpenSpotify(true)} />
            </div>
            <RiTodoLine className='text-2xl cursor-pointer' />
        </nav>
    </div>
    
    );
}    

export default React.memo(MediaNav);