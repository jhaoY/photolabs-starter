import { useReducer, useState } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: []
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload] }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload) }
    case ACTIONS.SET_PHOTO_DATA:

    case ACTIONS.SET_TOPIC_DATA:

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: action.payload }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = (photo) => {
    if (state.favoritePhotos.includes(photo.id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo.id })
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo.id })
    }
  }

  const setPhotoSelected = photo => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true })
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  }

  return {
    state: {
      isModalOpen: state.isModalOpen,
      selectedPhoto: state.selectedPhoto,
      favoritePhotos: state.favoritePhotos
    },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;