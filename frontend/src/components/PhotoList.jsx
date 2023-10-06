import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos} = props
  
  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return <PhotoListItem key={photo.id} photo={photo} />
      })}
    </ul>
  );
};

export default PhotoList;
