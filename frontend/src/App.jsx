import React from 'react';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setTopicSelected,
    resetTopicSelected
  } = useApplicationData();

  const {
    isModalOpen,
    selectedPhoto,
    favoritePhotos,
    photoData,
    topicData
  } = state

  return (
    <div className="App">
      <HomeRoute
        topics={topicData}
        photos={photoData}
        favoritePhotos={favoritePhotos}
        setPhotoSelected={setPhotoSelected}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setTopicSelected={setTopicSelected}
        resetTopicSelected={resetTopicSelected}
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
