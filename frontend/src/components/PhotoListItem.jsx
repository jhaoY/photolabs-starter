import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const {sampleDataForPhotoListItem} = props
  
  return(
    <div>
      <img src={sampleDataForPhotoListItem.imageSource} alt="" />
      <img src={sampleDataForPhotoListItem.profile} alt="" />
      <p>
        {sampleDataForPhotoListItem.username} <br/>
        {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
      </p>
    </div>
  )
};

export default PhotoListItem;
