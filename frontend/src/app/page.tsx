'use client'
import React from 'react';
import Events from '@/app/events/page'
import Header from './component/Header';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Header/>
      <Events/>
      <p>Faça o cadastro para visualizar novos eventos e confirmar a presença</p> 
       {/* <button
        onClick={() => router.push('/login')}   
       >
        Login
       </button> */}
    </>
  )
}
