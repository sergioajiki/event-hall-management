'use client'

import React from 'react'
import Header from '../component/Header'
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div>
        <h3>Ferramentas de administrador</h3>
        <button
          onClick={ () => router.push('/users') }
          className="buttonHeader"
          >
            Lista de Usuários
        </button>
        <button
          onClick={ () => router.push('/events/createEvent') }
          className="buttonHeader"
          >
            Criar Evento
        </button>
      </div>
    </>

  )
}
