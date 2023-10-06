import React from 'react';

import TopNavigationBar from 'components/TopNavigationBar'
import PhotoList from 'components/PhotoList';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
