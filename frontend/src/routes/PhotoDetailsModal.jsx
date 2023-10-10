import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, favoritePhotos, onClosePhotoDetailsModal, updateToFavPhotoIds } = props

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => onClosePhotoDetailsModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          photo={photo}
          favoritePhotos={favoritePhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
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
            Related Photos
          </p>
        </header>
      </div>
      <div className='photo-details-modal__related-images'>
        <PhotoList
          photos={Object.values(photo.similar_photos)}
          favoritePhotos={favoritePhotos}
          updateToFavPhotoIds={updateToFavPhotoIds} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
