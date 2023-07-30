'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Event, { propsEvent } from './component/Event'
import { requestData } from '@/app/service/request';
import Loading from './component/Loading';
import { useState, useEffect } from 'react';

export default function Home() {
  const [eventsList, setEventsList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true)

  const getEvents = async (endpoint: string) => requestData(endpoint)
    .then((response) => setEventsList(response))
    .catch((error) => console.log(error));
  
  useEffect(() => {
    const endpoint = '/event/private';
    if(eventsList.length === 0) {
      getEvents(endpoint)
    }
  }, [eventsList])  
  if(!eventsList.length){
    return <Loading />
  }
  

  // console.log('aqui do page', events());
  
  return (
    <main className={styles.main}>
      <h1>Eventos</h1>

      {
        eventsList.map((event: propsEvent, index): any => (
         <Event key={index}
          eventName={ event.eventName }
          eventDate={ event.eventDate }
          eventTime={ event.eventTime }
          eventType={ event.eventType }
          description={ event.description }
          />) 
         )
      }
      
    </main>
  )
}
