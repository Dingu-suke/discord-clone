import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { collection, CollectionReference, DocumentData, onSnapshot, Query, query } from 'firebase/firestore'
import { db } from '../components/firebase'

interface Channel {
  id: string,
  channel: DocumentData
}


const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channel[]>([])
  const collectionRef: Query<DocumentData> = query(
    collection(db, data)
  )
  
  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(), 
        })
      )
      setDocuments(channelsResults);
    })
  }, [])
  
  return { documents }
}

export default useCollection
