import React from 'react';
import './ChatHeader.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import SendIcon from '@mui/icons-material/Send';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          Udemy
        </h3>
      </div>
      <div className='chatHeaderRight'>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chatHeaderSearch">
          <input className='input' type="text" placeholder='Search' />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon /> 
      </div>
    </div>
  )
}

export default ChatHeader