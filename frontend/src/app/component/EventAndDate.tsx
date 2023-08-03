'use client'
import React from "react";import Link from 'next/link';
import './style/EventAndDate.css'

export type EventAndDate = {
  id: number, eventName: string, eventDate: string,
}

export default function EventAndDate ({  
  id, eventName, eventDate
}: EventAndDate) {
  return (
    <div className="EventAndDateComponent">
      <p key={ id }>
        <Link
         href={`/events/${id}`}
         className="link">
          {eventName} {eventDate}
        </Link>
      </p>
    </div>
  )
}