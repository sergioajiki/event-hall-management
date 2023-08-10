'use client'

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import { postData } from '@/app/service/request';
import './style/Subscription.css'

export default function SubscriptionUser() {

  const router = useRouter()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [failedTryCreate, setFailedTryCreate] = useState(false);
  // const [successTryCreate, setSuccessTryCreate] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');
  const createUser = async (e: any) => {
    e.preventDefault();

    // setSuccessTryCreate(false)
    // setFailedTryCreate(false)

    const body = {
      username,
      email,
      password
    }
    try {
      const userCreated = await postData('/login/register', body)
      alert(userCreated.message)
      
      // setSuccessMessage(userCreated.message)
      // setSuccessTryCreate(true)
      setUsername('')
      setEmail('')
      setPassword('')
      router.push('/')
    } catch (error: any) {
      alert(error.response.data.message)
      // setErrorMessage(error.response.data.message)
      // setFailedTryCreate(true);
    }
  }

  return (
    <>
      <form className="formSubscription">
        <h2> Primeiro Acesso </h2>
        <span className='inputs'>
          <div>
            <label
              htmlFor="usernameInput"
            >Nome:
              <input
                type="text"
                value={username}
                onChange={({ target: { value } }) => setUsername(value)}
                placeholder="Nome"
                className="inputLogin"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="emailInput"
            >
              Email:
              <input
                type="text"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                placeholder="Email"
                className="inputLogin"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="passwordInput"
            >
              Senha:
              <input
                type="text"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                placeholder="Password"
                className="inputLogin"
              />
            </label>
          </div>
        </span>
        <div>
          <button
            onClick={(e) => createUser(e)}
            type="submit"
            className="buttonRegister"
          >
            Cadastrar
          </button>
          {/* {
            (successTryCreate) ? (<p>{successMessage}</p>) : null
          }
          {
            (failedTryCreate) ? (<p>{errorMessage}</p>) : null
          } */}
        </div>

      </form>
    </>
  )

}