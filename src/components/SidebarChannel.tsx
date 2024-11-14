import React from 'react'
import './sidebarChannel.scss'
import { DocumentData } from 'firebase/firestore'
import { useAppDispatch } from '../app/hooks';
import { setChannelsInfo } from '../features/channelSlice';

type Props = {
  id: string,
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  const {channel, id} = props;
  const dispatch = useAppDispatch()
  
  return (
    <div className='sidebarChannel' 
        onClick={() => 
          dispatch(
            setChannelsInfo(
              {
                channelId: id,
                channelName: channel.channel.channelName
              }
            )
    )}>
      <h4>
        <span className='sidebarChannelHash'>#</span>
          {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel