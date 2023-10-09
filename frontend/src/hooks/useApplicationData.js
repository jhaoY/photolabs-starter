import { useReducer, useState, useEffect } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  selectedTopic: null,
  favoritePhotos: [],
  photoData: [],
  topicData: []
}


const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload] }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload) }
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload }
    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: action.payload }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(err => {
        console.error('Error fetching photos', err)
      })
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(err => {
        console.error('Error fetching topics', err)
      })
  }, [])

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
    }
  }, [state.selectedTopic])

  const updateToFavPhotoIds = (photo) => {
    if (state.favoritePhotos.includes(photo.id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo.id })
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo.id })
    }
  }

  const setTopicSelected = topic => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topic.id })
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
      selectedTopic: state.selectedTopic,
      favoritePhotos: state.favoritePhotos,
      photoData: state.photoData,
      topicData: state.topicData
    },
    updateToFavPhotoIds,
    setPhotoSelected,
    setTopicSelected,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;