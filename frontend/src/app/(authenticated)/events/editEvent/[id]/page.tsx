'use client'

import React, { useState, useEffect } from 'react';
import { updateData } from '@/app/service/request';
import { requestData } from '@/app/service/request'

export default function EditEvent(
  { params }: {params: {id: string}}, 
  ) {

  const [eventById, setEventById]: any = useState([]);  
  const [eventName, setEventName] = useState(''); 
  const [eventDate, setEventDate] = useState(''); 
  const [eventTime, setEventTime] = useState(''); 
  const [eventType, setEventType] = useState('private'); 
  const [description, setDescription] = useState(''); 
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [successTryCreate, setSuccessTryCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const getEvent = async (endpoint: string) => {
    const response =  await requestData(endpoint);
    setEventById(response);
    setEventName(response.eventName)
    setEventDate(response.eventDate)
    setEventTime(response.eventTime)
    setEventType(response.eventType)
    setDescription(response.description)
  }
  
  useEffect(() => {
    const endpoint = `/event/${params.id}`;
      if(eventById.length === 0) {
         getEvent(endpoint);
      }
  }, [eventById, params.id])
  
  const editEvent = async(e: any) => {
    e.preventDefault();
    setSuccessTryCreate(false)
    setFailedTryCreate(false)
  
    const body = {
      eventName,
      eventDate,
      eventTime,
      eventType,
      description
    }

    try {
      const eventUpdated = await updateData(`/event/${params.id}`, body)
      console.log('eventCreated', eventUpdated.message);
      setSuccessMessage(eventUpdated.message)
      setSuccessTryCreate(true)
    } catch (error: any) {
      setErrorMessage(error.response.data.message)
      setFailedTryCreate(true);
    }
  };
  
  return (
    <form>
        <div>
        <br />
        <label
          htmlFor="eventNameInput"
        >Nome:
        <input
          type="text"
          value={ eventName }
          onChange={ ({ target: {value }}) => setEventName(value) }
          placeholder="Nome"
        />
        </label>        
      </div>
            <div>
        <br />
        <label
          htmlFor="eventDateInput"
        >Data:
        <input
          type="text"
          value={ eventDate }
          onChange={ ({ target: {value }}) => setEventDate(value) }
          placeholder="Data"
        />
        </label>        
      </div>
      <div>
        <br />
        <label
          htmlFor="eventTimeInput"
        >Horário:
        <input
          type="text"
          value={ eventTime }
          onChange={ ({ target: {value }}) => setEventTime(value) }
          placeholder="Horário"
        />
        </label>        
      </div>
      <div>
        <br />
        <label
          htmlFor="eventTypeInput"
        >Tipo:
          <select
            id="eventType"
            name="type"
            value={ eventType }
            onChange={ ({ target: {value }}) => setEventType(value) }
          >
              <option value="free">Livre</option>
              <option value="registered">Registrado</option>
              <option value="private">Privado</option>
          </select> 
        </label> 

      </div>
      <div>
      <br />
        <label
        htmlFor="descriptionInput"
        >Descrição:
        <input
            type="text"
            value={ description }
            onChange={ ({ target: { value }}) => setDescription(value) }
            placeholder="Descrição"
        />
        </label>       
      </div>
      {
        (successTryCreate) ? (<p>{ successMessage }</p> ) : null
      }
      { 
        (failedTryCreate) ? ( <p>{ errorMessage }</p> ) : null
      }

      <div>
      <br />
        <button 
        onClick={ (e) => editEvent(e) }
        type="submit"
        >Editar Evento</button>
      </div>
    </form>
  )  
}