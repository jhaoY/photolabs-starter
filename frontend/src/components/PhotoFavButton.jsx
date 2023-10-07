import React, { useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {photo, favoritePhotos, updateToFavPhotoIds} = props

  const isPhotoFavorited = favoritePhotos.includes(photo.id)

  return (
    <div className="photo-list__fav-icon" onClick={() => updateToFavPhotoIds(photo)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isPhotoFavorited}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;