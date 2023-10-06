import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setIsModalOpen, selectedPhoto } = props
  console.log(selectedPhoto)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setIsModalOpen(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
