import React from 'react';
import { useState } from 'react';

import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {photos, topics} = props
  const [favoritePhotos, setFavoritePhotos] = useState([])

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favoritePhotos={favoritePhotos}/>
      <PhotoList photos={photos} favoritePhotos={favoritePhotos} setFavoritePhotos={setFavoritePhotos}/>
    </div>
  );
};

export default HomeRoute;
