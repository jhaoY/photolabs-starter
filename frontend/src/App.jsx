import React from 'react';
import { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const handlePhotoClick = photo => {
    setIsModalOpen(true)
    setSelectedPhoto(photo)
  }

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        handlePhotoClick={handlePhotoClick}
      />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
