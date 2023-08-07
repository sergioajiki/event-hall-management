'use client'

import React, { useState, useEffect } from 'react';
import { postData } from '@/app/service/request';
import { useRouter } from "next/navigation";
import './style/createEvent.css'
import Header from '@/app/component/Header';

export default function CreateEvent() {
  const router = useRouter();

  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventType, setEventType] = useState('private');
  const [description, setDescription] = useState('');
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [successTryCreate, setSuccessTryCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const createEvent = async (e: any) => {
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
      const eventCreated = await postData('/event', body)
      console.log('eventCreated', eventCreated.message);
      setSuccessMessage(eventCreated.message)
      setSuccessTryCreate(true)
    } catch (error: any) {
      console.log(error);

      setErrorMessage(error.response.data.message)
      setFailedTryCreate(true);
    }

  }
  return (
    <>
      <Header />
      <form className="formCreateEvent">
        <h2>Cadastro de Evento</h2>
        <span className="inputs">
          <div>
            <label
              htmlFor="eventNameInput"
            >
              Nome:
              <input
                type="text"
                value={eventName}
                onChange={({ target: { value } }) => setEventName(value)}
                placeholder="Nome"
                className="inputEvent"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="eventDateInput"
            >
              Data:
              <input
                type="text"
                value={eventDate}
                onChange={({ target: { value } }) => setEventDate(value)}
                placeholder="Data"
                className="inputEvent"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="eventTimeInput"
            >
              Horário:
              <input
                type="text"
                value={eventTime}
                onChange={({ target: { value } }) => setEventTime(value)}
                placeholder="Horário"
                className="inputEvent"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="eventTypeInput"
            >Tipo:
              <select
                id="eventType"
                name="type"
                value={eventType}
                onChange={({ target: { value } }) => setEventType(value)}
                className="inputEvent"
              >
                <option value="free">Livre</option>
                <option value="registered">Registrado</option>
                <option value="private">Privado</option>
              </select>
            </label>
          </div>
          <div>
            <label
              htmlFor="descriptionInput"
            >
              Descrição:
              <input
                type="text"
                value={description}
                onChange={({ target: { value } }) => setDescription(value)}
                placeholder="Descrição"
                className="inputEvent"
              />
            </label>
          </div>
        </span>
        <div>
          <button
            onClick={(e) => createEvent(e)}
            type="submit"
            className="buttonRegister"
          >
            Cadastrar Evento
          </button>
          <button
            onClick={() => router.push('/')}
            type="button"
            className="buttonRegister"
          >
            Home
          </button>
          {
            (successTryCreate) ? (<p>{successMessage}</p>) : null
          }
          {
            (failedTryCreate) ? (<p>{errorMessage}</p>) : null
          }
        </div>
      </form>
    </>
  )
}
