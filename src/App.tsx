import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { useAppSelector } from './app/hooks';


function App() {

  const user = useAppSelector((state) => state.user)
  console.log(user); 

  return (
    <div className="App">
    {user ? (
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
