import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './components/firebase';
import { login, logout } from './features/userSlice';


function App() {

  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName
          }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

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
