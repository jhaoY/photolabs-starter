import React from 'react';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { 
    isModalOpen, 
    selectedPhoto, 
    favoritePhotos 
  } = state

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favoritePhotos={favoritePhotos}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />
      {isModalOpen &&
        <PhotoDetailsModal
        photo={selectedPhoto}
        favoritePhotos={favoritePhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        />}
    </div>
  );
};

export default App;
