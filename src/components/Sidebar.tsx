import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import SettingsIcon from '@mui/icons-material/Settings';
import { Logout } from '@mui/icons-material';
import { useAppSelector } from '../app/hooks';
import { auth, db } from './firebase';
import { addDoc, collection, DocumentData, onSnapshot, query, QuerySnapshot } from 'firebase/firestore';
import useCollection from '../hooks/useCollection';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user)
  const { documents: channels } = useCollection("channels")

  const addChannel = async () => {
    let channelName: string | null = prompt('新しいチャンネルを作成します')
    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName
      });
    }
  }

  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className='serverIcon'>
          <img src='./discordIcon.png' alt="" />
        </div>
        <div className='serverIcon'>
          <img src='./discordIcon.png' alt="" />
        </div>
        <div className='logoutIcon' onClick={() => auth.signOut()}>
          <Logout/>
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' onClick={addChannel}/>
          </div>
          <div className='sidebarChannelsList'>
            {channels.map(channel => (
              <SidebarChannel channel={channel} id={channel.id} key={channel.id}/>
            )
            )}
          </div>

          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src={user?.photo} alt="" />
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>

        </div>
      </div>
      {/* sidebarChannels */}
    </div>
  )
}

export default Sidebar
