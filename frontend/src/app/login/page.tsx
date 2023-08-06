'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { postData, setToken } from '@/app/service/request';
import SubscriptionUser from '../subscription/page';
import './style/Login.css'

export default function LoginPage(): JSX.Element {
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false)
  const [failedTryCreate, setFailedTryCreate] = useState(false);
  const [successTryCreate, setSuccessTryCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const login = async (e: any) => {
    e.preventDefault();

    try {
      const recoverdToken = await postData('/login', { email, password });
      console.log('token', recoverdToken.token);

      setToken(recoverdToken.token)
      const { role, status } = await postData('/login/role', { email, password });
      console.log('role', role);
      console.log(status);

      localStorage.setItem('token', recoverdToken.token);
      localStorage.setItem('role', role);
      localStorage.setItem('email', email)
      setSuccessMessage(recoverdToken.message)
      setSuccessTryCreate(true)
      if (status === 0) {
        setErrorMessage(recoverdToken.message)
        setFailedTryCreate(true);
        setIsLogged(false);
        console.log('status inativo', status);
      }
      setIsLogged(true);
      router.push('/');
    } catch (error: any) {
      setErrorMessage(error.response.data.message)
      setFailedTryCreate(true);
      setIsLogged(false);
    }
  };
  return (

    <>
    <span className="loginPage">
    <div>
      <form className="formLogin">
        <h2>Login</h2>
        <span className='inputs'>
          <div>

            <label
              htmlFor="emailInput"
            >Email:
              <input
                type="text"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
                placeholder="Login"
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
            onClick={(e) => login(e)}
            type="submit"
            className="buttonLogin"
          >Entrar</button>
        </div>
        {
          (successTryCreate) ? (<p>{successMessage}</p>) : null
        }
        {
          (failedTryCreate) ? (<p>{errorMessage}</p>) : null
        }
      </form>
      </div>
      <div>
        <SubscriptionUser />

      </div>
      </span>
    </>
  )
};