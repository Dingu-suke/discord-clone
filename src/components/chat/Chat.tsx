import React from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';

const Chat = () => {
  return (
  <div className="chat">
      {/* chat header */}
      <ChatHeader />
      {/* chat messages */}
      <div className='chatMessages'></div>
      {/* chat input */}
      <div className='chatInput'></div>
    </div>
  );
}

export default Chat