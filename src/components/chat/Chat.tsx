import React from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import { AddCircleOutline } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Chat = () => {
  return (
  <div className="chat">
      {/* chat header */}
      <ChatHeader />
      {/* chat messages */}
      <div className='chatMessages'></div>
      {/* chat input */}
      <div className='chatInput'>
        <AddCircleOutline fontSize='large' />
        <form>
          <input type="text" placeholder='messege to #Udemy' />
          <button type='submit' className='chatInputButton'>Send</button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat