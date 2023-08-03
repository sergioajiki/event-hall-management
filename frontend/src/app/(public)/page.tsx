'use client'
import React from 'react';
import Events from '@/app/(authenticated)/events/page'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
       <h1>Event Hall</h1>
       <p> Eventos Disponiveis</p>
       <Events/>
       <button
        onClick={() => router.push('/login')}   
       >
        Login
       </button>
    </div>
  )
}
