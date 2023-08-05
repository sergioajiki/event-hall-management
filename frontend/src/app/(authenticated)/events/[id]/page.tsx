'use client'

import { requestData } from '@/app/service/request'
import { useEffect, useState } from 'react'
import Loading from '@/app/component/Loading';
import Event from '@/app/component/Event';
import OtherEvents from '@/app/component/OtherEvents';

export default function EventInfos(
   { params }: {params: {id: string}}, 
) {

  const [eventById, setEventById]: any = useState([]);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const getEvent = async (endpoint: string) => {
    const response =  await requestData(endpoint);
    setEventById(response);
  }

  useEffect(() => {
  const recoveredRole = localStorage.getItem('role') || '';
  const recoveredEmail = localStorage.getItem('email') || '';
  setRole(recoveredRole)
  setEmail(recoveredEmail)
  }, [])

  useEffect(() => {
    const endpoint = `/event/${params.id}`;
    if(eventById.length === 0) {
      getEvent(endpoint);
    }
  }, [eventById, params.id])

  if(!eventById){
    return <Loading />
  }

  console.log('email', email, 'role', role);

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
          role={ role }
          email={ email }
        />
      <hr/>
        <OtherEvents
           currentEventId={ params.id}
           role={ role }  
        />
    </div>
    
  )
}