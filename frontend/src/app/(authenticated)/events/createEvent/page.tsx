'use client'

import React, { useState, useEffect } from 'react';
import { postData } from '@/app/service/request';

export default function CreateEvent () {
  // const [] = useState('');  
  const [eventName, setEventName] = useState(''); 
  const [eventDate, setEventDate] = useState(''); 
  const [eventTime, setEventTime] = useState(''); 
  const [eventType, setEventType] = useState('private'); 
  const [description, setDescription] = useState(''); 
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [successTryCreate, setSuccessTryCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const createEvent = async (e) => {
    e.preventDefault();

    setSuccessTryCreate(false)
    setErrorMessage(false)
    const body = {
      eventName,
      eventDate,
      eventTime,
      eventType,
      description
    }
    try {
      const eventCreated = await postData('/event', body)
      console.log('eventCreated', eventCreated.message);
      setSuccessMessage(eventCreated.message)
      setSuccessTryCreate(true)
    } catch (error) {
      setErrorMessage(error.response.data.message)
      setFailedTryCreate(true);
    }

  }
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
      {/* <div>
        <br />
        <label
          htmlFor="eventTypeInput"
        >Tipo:
        <input
          type="text"
          value={ eventType }
          onChange={ ({ target: {value }}) => setEventType(value) }
          placeholder="Tipo"
        />
        </label>        
      </div> */}
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
        onClick={ (e) => createEvent(e) }
        type="submit"
        >Cadastrar Evento</button>
      </div>
    </form>
  )  
 



}
