import React, { useState } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import { AddCircleOutline } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';


const Chat = () => {
  const [ inputText, setInputText ] = useState<string>("");
  
  const channelName = useAppSelector((state) => state.channel.channelName)
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user)

  const sendMessage = async (event: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLButtonElement, EventTarget>) => {
    event.preventDefault()    
    
    /*

    [ やりたいこと ]
    
    channelコレクション
        |
        └------- messageコレクション
                        |
                        └---------- ⭐️ メッセージ情報を入れる

     */

    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef, {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user
      }
    )
    console.log(docRef);
  }

  return (
  <div className="chat">
      {/* chat header */}
      <ChatHeader channelName={channelName} />
      {/* chat messages */}
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