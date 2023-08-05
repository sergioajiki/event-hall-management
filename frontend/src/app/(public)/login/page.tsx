'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { postData, setToken } from '@/app/service/request';
import SubscriptionUser from '../subscription/page';

export default function LoginPage(): JSX.Element {
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false)
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  
  const login = async (e: any) => {
    e.preventDefault();

    try {
      const { token } = await postData('/login', { email, password });
      console.log('token', token);
     
      setToken(token)
      const { role, status } = await postData('/login/role', { email, password});
      console.log('role', role);  
      console.log(status);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('email', email)
      if (status === 0) {
          setFailedTryLogin(true);
          setIsLogged(false);
          console.log('status inativo', status);
          
      }
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect (() => {
    setFailedTryLogin(false);
  }, [email, password])
  
  // if (isLogged) {
  //   return router.push('/events');
  // } 

  return (
    <>
    <form>
   
      <div>
        <h2>Login</h2>
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
        (failedTryLogin)
          ? (
              <p data-testid="login__input_invalid_login_alert">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                   Verifique seu email para ativar a conta.
                  `
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
    <div>
      <h2> Primeiro Acesso </h2>
      <SubscriptionUser />
      
    </div>

    </>
  )  
};