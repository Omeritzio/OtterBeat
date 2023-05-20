import React, { useState } from 'react';

function App ()  {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (songId) => {
    if (favorites.includes(songId)) {
      // If the song is already in favorites, remove it
      setFavorites(favorites.filter((id) => id !== songId));
    } else {
      // If the song is not in favorites, add it
      setFavorites([...favorites, songId]);
    }
  };

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
      <h1>Songs</h1>
      {songs.map((artist, index) => (
        <div key={index}>
          <h2>{artist.artist}</h2>
          <ul>
            {artist.songs.map((song, songIndex) => (
              <li key={songIndex}>
                <h3>{song.title}</h3>
                <button onClick={() => toggleFavorite(song.id)}>
                  {favorites.includes(song.id) ? (
                    <span role="img" aria-label="Red Heart">
                      ❤️
                    </span>
                  ) : (
                    <span role="img" aria-label="White Heart">
                      🤍
                    </span>
                  )}
                </button>
                <p> Duration: {song.duration}</p>
                <p>Release Year: {song.releaseYear}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
