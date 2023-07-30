'use client'
import React from "react";

export type propsEvent = {
  eventName: string,
  eventDate: string,
  eventTime: string,
  eventType: string,
  description: string
} 


export  default function Event({
  eventName, eventDate, eventTime, eventType, description
}: propsEvent) {
      return(
      <div>
        <div>
          <h2>{ eventName }</h2>
          <h4>{ eventDate }</h4>
          <h4>{ eventTime }</h4>
          <h4>{ eventType }</h4>
          <p>{ description }</p>
        </div>
      </div>
      
    )
}