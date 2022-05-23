import React from 'react'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    HeartIcon,
    RssIcon,
    LogoutIcon,
    PlusCircleIcon
} from "@heroicons/react/outline";

function SideBar({setOpenSpotify}) {
  return (
    <div className='text-grey-500 p-5 text-sm border-r border-gray-90'>
        <div className='space-y-4'>
            <button onClick={() => setOpenSpotify(false)} className='flex items-center space-x-2 hover:text-white '>
                <LogoutIcon className='h-5 w-5' />
                <p>Hide player</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white '>
                <HomeIcon className='h-5 w-5'/>
                <p>Home</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white '>
                <SearchIcon className='h-5 w-5'/>
                <p>Search</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white '>
                <LibraryIcon className='h-5 w-5'/>
                <p>Your Library</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900 '/>
            <button className='flex items-center space-x-2 hover:text-white '>
                <PlusCircleIcon className='h-5 w-5'/>
                <p>Create Playlist</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white '>
                <HeartIcon className='h-5 w-5'/>
                <p>Your Library</p>
            </button>
            <button className='flex items-center space-x-2 hover:text-white '>
                <RssIcon className='h-5 w-5'/>
                <p>Your episodes</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900 '/>
            {/* playlist */}
            <p className='cursor-pointer hover:text-white'>
                playlist name
            </p>
            <p className='cursor-pointer hover:text-white'>
                playlist name
            </p>
            <p className='cursor-pointer hover:text-white'>
                playlist name
            </p>
            <p className='cursor-pointer hover:text-white'>
                playlist name
            </p>
        </div>
    </div>
  )
}

export default SideBar;
