import React, {useState, useEffect} from 'react';
import SideBar from './components/SideBar';
import MediaPreview from './components/MediaPreview';

export const Spotify = ({openSpotify, setOpenSpotify}) => {
    const [hide, setHide] = useState(false);
    const style = {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "1",
        opacity: "80%"
    }

    // useEffect(() => {
    //     if(hide && openSpotify){
    //         setOpenSpotify(false);
    //     }else{
    //         setOpenSpotify(true);
    //     }
    // }, [])

    return (
        <>
        { openSpotify && (
           <div style={style} className="bg-black g-screen overflow-hidden">
               <main>
                   { hide ? <MediaPreview /> : <SideBar setOpenSpotify={setOpenSpotify} />}
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