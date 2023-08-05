'use client'

import { propsEvent } from '../types/propsEvent'
import { requestData } from '@/app/service/request';
import { useState, useEffect } from 'react';
import EventAndDate from './EventAndDate';
import Link from 'next/link';
import Loading from './Loading';

type PropsCurrEvent = {
  currentEventId: string,
  role: string
}

export default function OtherEvents({ currentEventId, role }: PropsCurrEvent) {
  const [otherEvents, setOtherEvents] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getOtherEvents = async (endpoint: string) => {
    const response: propsEvent[] = await requestData(endpoint)
    const otherEvents: any = response.filter((event: propsEvent) => event.id !== +currentEventId)
    setOtherEvents(otherEvents)
  }
  
  useEffect(() => {
    let endpoint = '/event';
    if(role === 'admin' || role === 'guest') {
      endpoint = '/event/private'
    }
    
    if(otherEvents.length === 0) {
      getOtherEvents(endpoint)
    }
  }, [getOtherEvents, otherEvents, role]);

  if(!otherEvents.length){
    return <Loading />
  }
  return (
    <>
      {
        otherEvents.map((event: propsEvent) => (
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

