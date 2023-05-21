import React, { useState } from "react";
import Favorites from "./favorites";

const Songs =() => {
    const [songs, setSongs] = useState([]);

    useState(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/Songs.json');
            if (!response.ok) {
              throw new Error('Failed to fetch JSON data');
            }
            const data = await response.json();
            setSongs(data);
          } catch (error) {
            console.error('Error fetching JSON:', error);
          }
        };
        
        fetchData();
      }, []);

      return (
        <div>
        {songs.map((artist, index) => (
            <div key={index}>
            <h2>{artist.artist}</h2>
            <ul>
                {artist.songs.map((song, songIndex) => (
                <li key={songIndex}>
                    <h3>{song.title}</h3>
                    <p> Duration: {song.duration}</p>
                    <p>Release Year: {song.releaseYear}</p>
                    <Favorites/>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
      )

}

export default Songs 