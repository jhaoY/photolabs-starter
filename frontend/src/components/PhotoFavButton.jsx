import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photo, favoritePhotos, setFavoritePhotos} = props

  useEffect(() => {
    const isFavorited = favoritePhotos.includes(photo.id);
    setFavorite(isFavorited);
  }, [favoritePhotos, photo.id]);

  const isPhotoFavorited = favoritePhotos.includes(photo.id)
  const [favorite, setFavorite] = useState(isPhotoFavorited) //Local state for setting the icon to favorite

  const handleLikeClick = () => { 
    if (favorite) {
      setFavoritePhotos(favoritePhotos => favoritePhotos.filter(id => id !== photo.id))
    } else {
      setFavoritePhotos(favoritePhotos => [...favoritePhotos, photo.id])
    }
    setFavorite(favorite => !favorite) //Takes the current value of favorite then reverses it from true to false or vice versa
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleLikeClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;