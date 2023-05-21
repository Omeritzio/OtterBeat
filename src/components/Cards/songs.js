import React from "react";
import Favorites from "./favorites";

const Songs= (songs)=> {
    console.log(songs);
    return ( 
        <div>
            <ul>
                {songs?.songs.map((song, songIndex) => (
                <li key={songIndex} className="bg-light-green dib br3 pa3 grow bw2 shadow-5">
                    <h3>{song.title}</h3>
                    <p> Duration: {song.duration}</p>
                    <p>Release Year: {song.releaseYear}</p>
                    <Favorites songId={song.songid}/>
                </li>
                ))}
            </ul>
        </div>
    )

}

export default Songs;