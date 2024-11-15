import React, { useState } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import { AddCircleOutline } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';


const Chat = () => {
  const [ inputText, setInputText ] = useState<string>("");
  
  const channelName = useAppSelector((state) => state.channel.channelName)

  const sendMessage = (event: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLButtonElement, EventTarget>) => {
    event.preventDefault()
    console.log("sendMessage")
  }

  return (
  <div className="chat">
      {/* chat header */}
      <ChatHeader channelName={channelName} />
      {/* chat messages */}8
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
            <input type="text" placeholder='messege to #Udemy' 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setInputText(event.target.value)} />
            <button type='submit' className='chatInputButton' 
                    onClick={(event: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLButtonElement, EventTarget>) => 
                      sendMessage(event)}>Send</button>
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