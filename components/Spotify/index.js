import React from 'react';
// import {IoMdExit} from 'react-icons/io';

export const Spotify = ({openSpotify}) => {
    const style = {
        background: "gray",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "1",
        opacity: "80%"
    }
    return (
        <>
        { openSpotify && (
           <div style={style}>
               <main>
                   {/* side bar */}
                   {/* center */}
               </main>
               {/* player */}
            </div> 
        )}
        </>
        
    )
}