import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigationBar = (props) => {
  const { topics, favoritePhotos, setTopicSelected, resetTopicSelected } = props

  const isFavPhotoExist = favoritePhotos.length > 0 ? true : false

  return (
    <div className="top-nav-bar">
      <span onClick={() => resetTopicSelected()} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setTopicSelected={setTopicSelected}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigationBar;