import React from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import { AddCircleOutline } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';


const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName)

  return (
  <div className="chat">
      {/* chat header */}
      {/* chat messages */}
      <ChatHeader channelName={channelName} />
      <div className='chatMessages'>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
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