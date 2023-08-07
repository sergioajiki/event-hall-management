'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { propsUser } from '../types/propsUser';
import SelectAccess from './SelectAccess';
import '@/app/component/style/Users.css'

export default function User({
  id, username, email, role, status 
}: propsUser) {
  const router = useRouter();

  return (
    <div className="UserComponent">
      <div className="infoUsers">
      <h2>{ username }</h2>
        <span>Email: { email } </span>
        <span>Acesso: { role } </span>        
        <span>Status: { (status === 1)? 'active' : 'inativo' } </span>
        <SelectAccess 
          id={ id }
          previosRole={ role }
        />
      </div>
    </div>
  )  
}