'use client'

import { propsEvent } from '../types/propsEvent'
import { requestData } from '@/app/service/request';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from './Loading';

type PropsCurrEvent = {
  currentEventId: string;
}

export default function OtherEvents({ currentEventId }: PropsCurrEvent) {
  const [otherEvents, setOtherEvents] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getOtherEvents = async (endpoint: string) => {
    const response: propsEvent[] = await requestData(endpoint)
    const otherEvents: any = response.filter((event: propsEvent) => event.id !== +currentEventId)
    setOtherEvents(otherEvents)
  }
  
  useEffect(() => {
    const endpoint = '/event';
    if(otherEvents.length === 0) {
      getOtherEvents(endpoint)
    }
  }, [getOtherEvents, otherEvents]);

  if(!otherEvents.length){
    return <Loading />
  }

  return (
    <div>
      <ul>
        {
          otherEvents.map((event: propsEvent) => (
          <li key={ event.id }>
            <Link href={`/events/${event.id}`}>
             {event.eventName} {event.eventDate}           
            </Link>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

