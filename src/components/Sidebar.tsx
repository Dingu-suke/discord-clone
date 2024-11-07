import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className="sidebar">

      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className='serverIcon'>
          <img src='./logo192.png' alt="" />
        </div>
        <div className='serverIcon'>
          <img src='./logo192.png' alt="" />
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className='sidebarTop'>
          <h3>discord</h3>
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon'/>
          </div>
          <div className='sidebarChannelsList'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src='./icon_hinoarashi.png' alt="" />
              <div className='accountName'>
                <h4>Dingu</h4>
                <span>#0505</span>
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
