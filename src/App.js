import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import JoinRoom from './components/JoinRoom/JoinRoom';
import ChatRoom from './components/ChatRoom/ChatRoom';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinRoom} />
      <Route path="/ChatRoom" component={ChatRoom} />
    </Router>
  )
}

export default App;
