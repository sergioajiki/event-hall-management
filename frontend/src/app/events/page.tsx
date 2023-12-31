'use client'

import { propsEvent } from '../types/propsEvent';
import { requestData } from '@/app/service/request';
import Loading from '../component/Loading';
import { useState, useEffect } from 'react';
import EventAndDate from '@/app/component/EventAndDate';

export default function Events() {

  const [eventsList, setEventsList] = useState([]);
  const [isLogged, setLogin] = useState(false)
  const [roleAccess, setRoleAccess] = useState('client')
  const [isLoading, setIsLoading] = useState(true)

  const getEvents = async (endpoint: string) => {
    const response = await requestData(endpoint)
    setEventsList(response)
    setLogin(true)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    setLogin(false)
    const token = localStorage.getItem('token') || false;
    const role = localStorage.getItem('role');
    if (token) setLogin(true);
    if (role) setRoleAccess(role)
    let endpoint = '/event';
    if (roleAccess === 'admin' || roleAccess === 'guest') endpoint = 'event/private'
    if (eventsList.length === 0) {
      getEvents(endpoint)
    }
    // setLogin(true)
    setIsLoading(false)
  }, [eventsList, roleAccess]);

  // if(!eventsList.length){
  //   return <Loading />
  // }
  if (isLoading) return <Loading />

  return (
    <>
      <div className="compMain eventInfo" >
        <h1>Eventos</h1>
        {
          eventsList.map((event: propsEvent) => (
            <EventAndDate
              key={event.id}
              id={event.id}
              eventName={event.eventName}
              eventDate={event.eventDate}
            />
          ))
        }
        {
          (!isLogged) && (
            <p>Faça o cadastro para visualizar novos eventos e confirmar a presença</p>
          )
        }
      </div>

    </>
  )
}