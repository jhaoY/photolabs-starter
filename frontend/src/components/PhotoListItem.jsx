import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {
  const { photo } = props

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photo.urls.full} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="" />
        <p className="photo-list__user-info">
          {photo.user.name} <br />
          <span className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </span>
        </p>
      </div>
    </div>
  )
};

export default PhotoListItem;
