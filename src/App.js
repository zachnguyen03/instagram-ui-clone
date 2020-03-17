import React from 'react';
import Header from './components/header.component';
import Feed from './components/feed.component';

import 'bootstrap/dist/css/bootstrap.css'; 

function App() {
  return (
    <div className="container">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
