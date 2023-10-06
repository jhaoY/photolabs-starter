import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorite, setFavorite] = useState(false)

  const handleClick = () => { 
    setFavorite(prevFavorite => !prevFavorite) //Takes the current value of favorite then reverses it from true to false or vice versa
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;