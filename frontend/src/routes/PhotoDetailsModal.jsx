import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setIsModalOpen, photo, favoritePhotos, setFavoritePhotos } = props

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setIsModalOpen(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          photo={photo}
          favoritePhotos={favoritePhotos}
          setFavoritePhotos={setFavoritePhotos}
        />
        <img className='photo-details-modal__image' src={photo.urls.full} alt="" />
        <header className='photo-details-modal__header'>
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={photo.user.profile} alt="" />
            <p className='photo-details-modal__photographer-info'>
              {photo.user.name} <br />
              <span className='photo-details-modal__photographer-location'>{photo.location.city}, {photo.location.country}</span>
            </p>
          </div>
          <p>
            Similar Photos
          </p>
        </header>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoList
          photos={Object.values(photo.similar_photos)}
          favoritePhotos={favoritePhotos}
          setFavoritePhotos={setFavoritePhotos}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
