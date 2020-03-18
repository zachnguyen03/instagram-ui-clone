import React from 'react';
import Header from './components/header.component';
import Feed from './components/feed.component';
import Stories from './components/feed-stories.component';

import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'; 

const StoriesFeed = styled.div`
    float: right;
    width: 15%;
    border: 0.3px solid #BABABA;
`

function App() {
  return (
    <div className="container" style={{clear: 'both'}}>
      <Header />
      <Feed />
      <StoriesFeed>
        <Stories />
      </StoriesFeed>
    </div>
  );
}

export default App;
