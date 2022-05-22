import React from 'react';
// import {IoMdExit} from 'react-icons/io';
import SideBar from './components/SideBar';

export const Spotify = ({openSpotify}) => {
    const style = {
        // background: "gray",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "1",
        opacity: "80%"
    }
    return (
        <>
        { openSpotify && (
           <div style={style} className="bg-black g-screen overflow-hidden">
               <main>
                   <SideBar />
                   {/* center */}
               </main>
               <div>
                    {/* player */}
               </div>
            </div> 
        )}
        </>
        
    )
}