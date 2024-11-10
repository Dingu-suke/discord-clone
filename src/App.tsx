import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/Login';


function App() {

  // const user = useSelector(state => state.user.user)
  const user = null

  return (
    <div className="App">
    {user? (
      <>
          {/* sidebar */}
          <Sidebar />
          {/* chat */}
          <Chat />        
      </>
    ):(
      <>
        <Login></Login>
      </>
    )}
  </div>
  );
}

export default App;
