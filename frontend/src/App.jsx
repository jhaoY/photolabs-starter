import React from 'react';
import { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { isModalOpen, selectedPhoto, favoritePhotos } = state

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favoritePhotos={state.favoritePhotos}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      {isModalOpen &&
        <PhotoDetailsModal
        photo={selectedPhoto}
        favoritePhotos={state.favoritePhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />}
    </div>
  );
};

export default App;
