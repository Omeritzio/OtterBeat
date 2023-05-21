import React, { useState } from "react";

const Favorites =({songId}) => {
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

    return (
        <div>
            <button onClick={() => toggleFavorite(songId)}>
                {favorites.includes(songId) ? (
                    <span role="img" aria-label="Red Heart">
                    ❤️
                    </span>
                ) : (
                    <span role="img" aria-label="White Heart">
                    🤍
                    </span>
                )}
        </button>
          </div>
    )
}

export default Favorites