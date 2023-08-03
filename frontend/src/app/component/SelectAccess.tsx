'use client'

import React, { useState, useEffect } from 'react';
import { updateData } from '../service/request';

type updateBody = {
  id: number
  previosRole: string
}

export default function SelectAccess({id, previosRole}: updateBody) {

  const [role, setRole] = useState(previosRole);
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [successTryCreate, setSuccessTryCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const updateUserLevel = async(e: any) => {
    e.preventDefault();
    const body = { role };
    try {
      const updatelevel = await updateData(`/users/role/${id}`, body)
      console.log('eventCreated', updatelevel.message);
      setSuccessMessage(`${updatelevel.message} para ${role}` )
      setSuccessTryCreate(true)
    } catch (error: any) {
      setErrorMessage(error.response.data.message)
      setFailedTryCreate(true);
    }
  }
  
  return (
    <>
        <label
          htmlFor="eventTypeInput"
        >Tipo:
          <select
            id="eventType"
            name="type"
            value={ role }
            onChange={ ({ target: {value }}) => setRole(value) }
          >
              <option value="client">client</option>
              <option value="guest">guest</option>
              <option value="admin">admin</option>
          </select> 
        </label> 
        <button
        onClick={ (e) => updateUserLevel(e)}
        >
          Alterar Acesso
        </button>
        {
        (successTryCreate) ? (<p>{ successMessage }</p> ) : null
      }
      { 
        (failedTryCreate) ? ( <p>{ errorMessage }</p> ) : null
      }
      </>
  )
}

