import React from 'react';
import { useState } from 'react';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, setPhotoSelected, favoritePhotos, updateToFavPhotoIds, setTopicSelected } = props

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritePhotos={favoritePhotos}
        setTopicSelected={setTopicSelected}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        setPhotoSelected={setPhotoSelected} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        />
    </div>
  );
};

export default HomeRoute;
