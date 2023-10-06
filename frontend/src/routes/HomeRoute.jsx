import React from 'react';
import { useState } from 'react';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, handlePhotoClick, favoritePhotos, setFavoritePhotos } = props

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favoritePhotos={favoritePhotos}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        setFavoritePhotos={setFavoritePhotos}
        handlePhotoClick={handlePhotoClick} />
    </div>
  );
};

export default HomeRoute;
