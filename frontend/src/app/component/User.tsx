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
      <h2>{username}</h2>
      <div className="infoUsers" >
        <span>Email: {email} </span>
        <span>Acesso: {role} </span>
        <span>Status: {(status === 1) ? 'active' : 'inactive'} </span>
        <SelectAccess
          id={id}
          previosRole={role}
        />
      </div>
    </div>
  )
}