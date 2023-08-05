'use client'

import { propsEvent } from '../../types/propsEvent';
import { requestData } from '@/app/service/request';
import Loading from '../../component/Loading';
import { useState, useEffect } from 'react';
import EventAndDate from '@/app/component/EventAndDate';

export default function Events() {

  const [eventsList, setEventsList] = useState([]);
  const [logged, setLogin] = useState(false)
  const [roleAccess, setRoleAccess] = useState('client')

  const getEvents = async (endpoint: string) => {
    const response = await requestData(endpoint)
    setEventsList(response)
  }
  
  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    const role = localStorage.getItem('role');
    if (token) setLogin(true);
    if (role) setRoleAccess(role)
    let endpoint = '/event';
    if (roleAccess === 'admin' || roleAccess === 'guest') endpoint = 'event/private'
    if(eventsList.length === 0) {
      getEvents(endpoint)
    }
  }, [eventsList, roleAccess]);

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