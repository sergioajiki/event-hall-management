'use client'

import { requestData } from '@/app/service/request'
import { useEffect, useState } from 'react'
import Loading from '@/app/component/Loading';
import Event from '@/app/component/Event';
import OtherEvents from '@/app/component/OtherEvents';
import Header from '@/app/component/Header';
import { EventById } from '@/app/types/propsEvent';


export default function EventInfos(
  { params }: { params: { id: string } },
) {

  const [eventById, setEventById]  = useState<EventById>();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');

  const getEvent = async (endpoint: string) => {
    const response = await requestData(endpoint);
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
    if (!eventById) {
      getEvent(endpoint);
    }
  }, [eventById, params.id])

  if (!eventById) {
    return <Loading />
  }
  
  return (
    <>
      <Header />
      <div className="compMain eventInfo" >
        <h1>Informações do Evento</h1>
        <span className="meio">
          <div>
            <Event
              id={eventById.id}
              eventName={eventById.eventName}
              eventDate={eventById.eventDate}
              eventTime={eventById.eventTime}
              eventType={eventById.eventType}
              description={eventById.description}
              userList={eventById.users}
              role={role}
              email={email}
            />

          </div>
          <div>
            <OtherEvents
              currentEventId={params.id}
              role={role}
            />
          </div>
        </span>
      </div >
    </>
  )
}