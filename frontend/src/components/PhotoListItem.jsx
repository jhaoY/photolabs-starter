import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { sampleDataForPhotoListItem } = props

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={sampleDataForPhotoListItem.imageSource} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.profile} alt="" />
        <p className="photo-list__user-info">
          {sampleDataForPhotoListItem.username} <br />
          <span className="photo-list__user-location">
            {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
          </span>
        </p>
      </div>
    </div>
  )
};

export default PhotoListItem;
