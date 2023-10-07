import { useState } from "react";

function useApplicationData() {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [favoritePhotos, setFavoritePhotos] = useState([])

  const updateToFavPhotoIds = (photo) => { 
    const isPhotoFavorited = favoritePhotos.includes(photo.id);
    if (isPhotoFavorited) {
      setFavoritePhotos(favoritePhotos => favoritePhotos.filter(id => id !== photo.id))
    } else {
      setFavoritePhotos(favoritePhotos => [...favoritePhotos, photo.id])
    }
  }

  const setPhotoSelected = photo => {
    setIsModalOpen(true)
    setSelectedPhoto(photo)
  }

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      favoritePhotos
    },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;