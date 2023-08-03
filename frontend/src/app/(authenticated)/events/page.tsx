'use client'

import { propsEvent } from '../../types/propsEvent';
import { requestData } from '@/app/service/request';
import Loading from '../../component/Loading';
import { useState, useEffect } from 'react';
// import Link from 'next/link';
import EventAndDate from '@/app/component/EventAndDate';

export default function Events() {

  const [eventsList, setEventsList] = useState([]);

  const getEvents = async (endpoint: string) => {
    const response = await requestData(endpoint)
    setEventsList(response)
  }
  
  useEffect(() => {
    const endpoint = '/event';
    if(eventsList.length === 0) {
      getEvents(endpoint)
    }
  }, [eventsList]);

  if(!eventsList.length){
    return <Loading />
  }
 return (
    <>
      <h1>Eventos</h1>
      {
        eventsList.map((event: propsEvent) => (
          <EventAndDate
            key={ event.id}
            id={ event.id }
            eventName={ event.eventName }
            eventDate={ event.eventDate }
          />
        ))
      }
    </>
 )
}