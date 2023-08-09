'use client'

import React, { useState, useEffect } from 'react';
import { updateData } from '@/app/service/request';
import { requestData } from '@/app/service/request';
import { useRouter } from "next/navigation";
import '@/app/events/createEvent/style/createEvent.css'
import Header from '@/app/component/Header';
import Loading from '@/app/component/Loading';

export default function EditEvent(
  { params }: { params: { id: string } },
) {
  const router = useRouter();
  const [isLoading, setIstLoading] = useState(true)
  const [eventById, setEventById]: any = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventType, setEventType] = useState('private');
  const [description, setDescription] = useState('');
  // const [failedTryCreate, setFailedTryCreate] = useState(false);
  // const [successTryCreate, setSuccessTryCreate] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');

  const getEvent = async (endpoint: string) => {

    const response = await requestData(endpoint);

    setEventById(response);
    setEventName(response.eventName)
    setEventDate(response.eventDate)
    setEventTime(response.eventTime)
    setEventType(response.eventType)
    setDescription(response.description)
    setIstLoading(false)
  }

  useEffect(() => {
    const endpoint = `/event/${params.id}`;
    if (eventById.length === 0) {
      getEvent(endpoint);
    }
  }, [eventById, params.id])

  const editEvent = async (e: any) => {
    e.preventDefault();
    // setSuccessTryCreate(false)
    // setFailedTryCreate(false)

    const body = {
      eventName,
      eventDate,
      eventTime,
      eventType,
      description
    }
    if (isLoading) {
      return <Loading />;
    }
    try {
      const eventUpdated = await updateData(`/event/${params.id}`, body)
      alert(eventUpdated.message)
      router.push('/')
      // setSuccessMessage(eventUpdated.message)
      // setSuccessTryCreate(true)
    } catch (error: any) {
      alert(error.response.data.message)
      // setErrorMessage(error.response.data.message)
      // setFailedTryCreate(true);
    }
  };


  return (
    <>
      <Header />
      <span className="eventInfo">
        <form className="formCreateEvent">
          <h2>Editar evento</h2>
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
              >
                Tipo:
                <select
                  id="eventType"
                  name="type"
                  value={eventType}
                  className="inputEvent"
                  onChange={({ target: { value } }) => setEventType(value)}
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
            <br />
            <button
              onClick={(e) => editEvent(e)}
              type="submit"
              className="buttonRegister"
            >
              Atualizar
            </button>
            {/* <button
            onClick={() => router.push('/')}
            type="button"
            className="buttonRegister"
          >
            Home
          </button> */}

            {/* {
          (successTryCreate) ? (<p>{successMessage}</p>) : null
        }
        {
          (failedTryCreate) ? (<p>{errorMessage}</p>) : null
        } */}

          </div>

        </form>
      </span>
    </>
  )
}