'use client'
import React from "react";
import { propsEvent } from "../types/propsEvent";
import { useRouter } from "next/navigation";
import SubscriptionEvent from "../(authenticated)/events/subscriptionEvent/[id]/page";
import './style/Event.css'

export default function Event({
  id, eventName, eventDate, eventTime, eventType, description, role, email
}: propsEvent) {
  const router = useRouter();

      return(
      <div className="EventComponent">
        <h2>{ eventName }</h2>
        <div className="infos">
          <span>Data: { eventDate }</span>
          <span>Hora: { eventTime }</span>
          <span>Tipo: { eventType }</span>
          <span>{ description }</span>
        </div>
        <SubscriptionEvent 
          id={id}
          email={email}
        />
        
         {
          (role === 'admin') ? (
          <div className="EditButton">          
            <button
              className="EventEditButton"
              onClick={() => router.push(`/events/editEvent/${id}`)}
            >
              Editar Evento
            </button>
        </div>
          ) : null
        }

      </div>
    )
}