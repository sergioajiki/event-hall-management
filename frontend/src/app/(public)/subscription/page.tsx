'use client'

import React, { useState, useEffect } from 'react';
import { postData } from '@/app/service/request';

export default function SubscriptionUser() {

  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [successTryCreate, setSuccessTryCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const createUser = async (e: any) => {
    e.preventDefault();

    setSuccessTryCreate(false)
    setFailedTryCreate(false)
    
    const body = {
      username,
      email,
      password
    }
    try {
      const userCreated = await postData('/login/register', body)
      console.log('userCreated', userCreated.message);
      setSuccessMessage(userCreated.message)
      setSuccessTryCreate(true)
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (error: any) {
      setErrorMessage(error.response.data.message)
      setFailedTryCreate(true);
    }
  }
  
  return (
    <>
    <form>
      <div>
        <br />
        <label
          htmlFor="usernameInput"
        >Nome:
        <input
          type="text"
          value={ username }
          onChange={ ({ target: {value }}) => setUsername(value) }
          placeholder="Nome"
        />
        </label>        
      </div>
      <div>
        <br />
        <label
          htmlFor="emailInput"
        >
          Email:
        <input
          type="text"
          value={ email }
          onChange={ ({ target: {value }}) => setEmail(value) }
          placeholder="Email"
        />
        </label>        
      </div>
      <div>
        <br />
        <label
         htmlFor="passwordInput"
        >
          Senha:
        <input
          type="text"
          value={ password }
          onChange={ ({ target: { value }}) => setPassword(value) }
          placeholder="Password"
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
          onClick={ (e) => createUser(e) }
          type="submit"
        >
          Cadastrar
        </button>
      </div>
    </form>
    </>
  )  
  
}