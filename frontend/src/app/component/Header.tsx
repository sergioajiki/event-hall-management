'use client'

import React, { useEffect, useState } from 'react'
import LoginPage from '../login/page'
import Loading from './Loading'
import { useRouter } from "next/navigation";
import './style/Header.css'

export default function Header() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false)
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    setIsLogged(false);
    router.push('/');
  }

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    if (token) setIsLogged(true);    
    const recoveredRole = localStorage.getItem('role') || '';
    const recoveredEmail = localStorage.getItem('email') || '';
    setRole(recoveredRole)
    setEmail(recoveredEmail)
  }, [])
  return (
    <>
      <div className="headerComponent" > 
      <button
        onClick={ () => router.push('/') }
        className="buttonHeader"
        >
          Home
      </button>
 
          {
            (isLogged) ? (
              <>
              <h3> {email} </h3>
              {
                (role === 'admin') && (
                  <button
                  onClick={ () => router.push('/admin') }
                  className="buttonHeader"
                  >Tools</button>
                )
              }
              <button
              onClick={ () => logout() }
              className="buttonHeader"
              >Logout</button>
              </>
          )
          : ( 
            <>
              <h2>Event Hall</h2>
              <button
              className="buttonHeader"
              onClick={ () => router.push('/login') }
              >LoginPage</button>
            </>  
            )
        }
      </div>
    </>
    
  )
}