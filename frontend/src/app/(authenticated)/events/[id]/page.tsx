'use client'

import { requestData } from '@/app/service/request'
import { useEffect, useState } from 'react'
import Loading from '@/app/component/Loading';
import Event from '@/app/component/Event';
import OtherEvents from '@/app/component/OtherEvents';

export default function EventInfos(
   { params }: {params: {id: string}}, 
) {
  const recoveredRole = localStorage.getItem('role') || '';
  const recoveredEmail = localStorage.getItem('email') || '';
  const [eventById, setEventById]: any = useState([]);

  const getEvent = async (endpoint: string) => {
    const response =  await requestData(endpoint);
    setEventById(response);
  }

  useEffect(() => {
    const endpoint = `/event/${params.id}`;
    if(eventById.length === 0) {
      getEvent(endpoint);
    }
  }, [eventById, params.id])

  if(!eventById){
    return <Loading />
  }

  return (
    <div>
      <h1>Informações do Evento</h1>
        <Event
          id={eventById.id}
          eventName={ eventById.eventName }
          eventDate={ eventById.eventDate }
          eventTime={ eventById.eventTime }
          eventType={ eventById.eventType }
          description={ eventById.description }
          role={recoveredRole}
          email={recoveredEmail}
        />
        
      <br/>
      <hr/>
      <br/>
        <OtherEvents
           currentEventId={ params.id}  
        />
    </div>
    
  )
}