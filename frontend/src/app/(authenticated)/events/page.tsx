'use client'
import styles from '../../page.module.css'
import Event from '../../component/Event'
import { propsEvent } from '../../types/propsEvent';
import { requestData } from '@/app/service/request';
import Loading from '../../component/Loading';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Events() {

  const [eventsList, setEventsList] = useState([]);
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
 return (
    <main className={styles.main}>
      <h1>Eventos</h1>
      
      {
        eventsList.map((event: propsEvent) => (
          <li key={ event.id }>
            <Link href={`/events/${event.id}`}>
              {event.eventName}
            </Link>
          </li>
        ))
      }
      {/* {
        eventsList.map((event: propsEvent, index): any => (
         <Event key={event.id}
          id={event.id}
          eventName={ event.eventName }
          eventDate={ event.eventDate }
          eventTime={ event.eventTime }
          eventType={ event.eventType }
          description={ event.description }
          />) 
         )
      } */}
    </main>
 )
}