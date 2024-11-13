import React from 'react'
import './sidebarChannel.scss'
import { DocumentData } from 'firebase/firestore'

type Props = {
  id: string,
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  const {channel, id} = props;

  return (
    <div className='sidebarChannel'>
      <h4>
        <span className='sidebarChannelHash'>#</span>
          {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel