'use client'
import React, { useEffect, useState } from "react";
import { propsEvent } from "../types/propsEvent";
import { useRouter } from "next/navigation";
import SubscriptionEvent from "../events/subscriptionEvent/[id]/page";
import './style/Event.css'
import DeleteEvent from "../events/deleteEvent/[id]/page";


export default function Event({
  id, eventName, eventDate, eventTime, eventType, description, role, email
}: propsEvent) {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    if (token) setIsLogged(true);
  }, [])

  return(
    <>
    <div className="EventComponent">
      <h2>{ eventName }</h2>
      <div className="infos">
        <span>Data: { eventDate }</span>
        <span>Hora: { eventTime }</span>
        <span>Tipo: { eventType }</span>
        <span>{ description }</span>
      </div>
      {
        (eventType === 'free' ) ? null 
        : (((isLogged)?
          <SubscriptionEvent 
            id={id}
            email={email}
          />  
          :  <button
          onClick={() => router.push('/login')}
        >
          Fazer Login
        </button>
          ))
      }
      
      {
        (role === 'admin') ? (
        <div className="EditButton">          
          <button
            className="EventEditButton"
            onClick={() => router.push(`/events/editEvent/${id}`)}
          >
            Editar Evento
          </button>
          <DeleteEvent
            id={ id }
          />
        </div>
        ) : null
      }
    </div>
    </>
    )
}