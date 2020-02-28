import React from 'react';
import './App.css';
import Posts from './components/Posts';
import Comment from './components/Comment';

function App() {
  return (
    <div>
      <h3>Understanding Redux-Tool-Kit</h3>
      <h6>By using fake APIS,I will get count of <i>comments,albums,posts,albums,photos</i></h6>
      <Posts />
      <Comment />
    </div>
  );
}

export default App;
