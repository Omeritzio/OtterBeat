import React, { useState } from "react";
import Artist from "./artist";
import Songs from "./songs";

// import Song from "./song";

function ListOfSongs() {
  const [artists, setArtists]=useState([])

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Songs.json');
        if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    
    fetchData();
  }, []);
  return(
    <div>
      {artists.map((artist,index)=>{
        // console.log(artist)
       return <div key={index}>
        <Artist artist={artist.artist}/>
       <Songs songs={artist.songs}/>
        </div>
      })}
      
    
    </div>
  )

}

export default ListOfSongs;