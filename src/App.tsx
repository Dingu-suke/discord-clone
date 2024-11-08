import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/chat/Chat';

// (コミット用)

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
