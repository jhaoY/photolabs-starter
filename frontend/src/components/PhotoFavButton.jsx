import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photo, favoritePhotos, setFavoritePhotos} = props

  const isPhotoFavorited = favoritePhotos.includes(photo.id)

  const updateToFavPhotoIds = (isPhotoFavorited) => { 
    if (isPhotoFavorited === true) {
      setFavoritePhotos(favoritePhotos => favoritePhotos.filter(id => id !== photo.id))
    } else {
      setFavoritePhotos(favoritePhotos => [...favoritePhotos, photo.id])
    }
  }

  return (
    <div className="photo-list__fav-icon" onClick={() => updateToFavPhotoIds(isPhotoFavorited)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isPhotoFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;