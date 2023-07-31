'use client'
import React from "react";
import { propsEvent } from "../types/propsEvent";

export  default function Event({
  id, eventName, eventDate, eventTime, eventType, description
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