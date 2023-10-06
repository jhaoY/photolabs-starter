import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favoritePhotos, setFavoritePhotos, handlePhotoClick } = props

  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            favoritePhotos={favoritePhotos}
            setFavoritePhotos={setFavoritePhotos}
            handlePhotoClick={handlePhotoClick}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
