'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Navigate } from 'react-router-dom'
import Link from 'next/link';
import { requestData , postData, setToken } from '@/app/service/request';

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  
  const login = async (e: any) => {
    e.preventDefault();

    try {
      const { token } = await postData('/login', { email, password });
      console.log('token', token);
    
      setToken(token)
      const { role } = await postData('/login/role', { email, password});
      console.log('role', role);  
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('email', email)
    
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect (() => {
    setFailedTryLogin(false);
  }, [email, password])
  
  if (isLogged) {
    return router.push('/events');
  } 

  return (
    <form>
      <div>
        <br />
        <label
          htmlFor="emailInput"
        >Email:
        <input
          type="text"
          value={ email }
          onChange={ ({ target: {value }}) => setEmail(value) }
          placeholder="Login"
        />
        </label>        
      </div>
      <div>
        <label
         htmlFor="passwordInput"
        >Senha:
         <input
            type="text"
            value={ password }
            onChange={ ({ target: { value }}) => setPassword(value) }
            placeholder="Password"
         />
        </label>
       
      </div>
      { 
        (failedTryLogin)
          ? (
              <p data-testid="login__input_invalid_login_alert">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                   Por favor, tente novamente.`
                }
              </p>
            )
              : null
          }
      <div>
        <button 
        onClick={ (e) => login(e) }
        type="submit"
        >Entrar</button>
      </div>
    </form>
  )  
};