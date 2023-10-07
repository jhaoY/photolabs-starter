import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favoritePhotos, updateToFavPhotoIds, setPhotoSelected } = props

  return (
    <ul className="photo-list">
      {Array.isArray(photos) && photos.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            favoritePhotos={favoritePhotos}
            setPhotoSelected={setPhotoSelected}
            updateToFavPhotoIds={updateToFavPhotoIds}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
