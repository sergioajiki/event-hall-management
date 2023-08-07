'use client'

import React, { useState, useEffect } from 'react';
import { deleteData, postData, updateData } from '@/app/service/request';
import { useRouter } from 'next/navigation';

type deleteBody = {
  id: number
}
export default function DeleteEvent ( {id}: deleteBody ) {
  const router = useRouter();
  const deleteEvent = async(e: any) => {
    e.preventDefault();    
    await deleteData(`/event/${id}`) 
    router.push('/')
  }
  return (
    <>
      <button
        onClick={
          (e) => deleteEvent(e)
        }
        type="submit"
      >
        Apagar Evento
      </button>
    </>
  )
}

