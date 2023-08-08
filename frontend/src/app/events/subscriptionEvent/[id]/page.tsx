'use client'
import React, { useState, useEffect } from 'react';
import { postData } from '@/app/service/request';

type subscriptionEvent = {
  id: number;
  email: string
}
export default function SubscriptionEvent(
  {id, email}: subscriptionEvent
) {

  // const [failedTryCreate, setFailedTryCreate] = useState(false);
  // const [successTryCreate, setSuccessTryCreate] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');
  
  const signUpEvent = async(e: any) => {
    e.preventDefault();
    // setSuccessTryCreate(false)
    // setFailedTryCreate(false)
    const bodyEmail = {email}
    console.log(email, id);
    
    try {
      const inscribed = await postData(`/subscriptionEvent/${id}`, bodyEmail)
      alert(inscribed.message)
      // setSuccessMessage(inscribed.message)
      // setSuccessTryCreate(true)
    } catch (error: any) {
      alert(error.response.data.message)
      // setErrorMessage(error.response.data.message)
      // setFailedTryCreate(true);
    }
  }
  return (
    <>
      <button
        onClick={ (e) => signUpEvent(e) }
        type="submit"
      >
         Participar
      </button>
      {/* {
        (successTryCreate) ? (<p>{ successMessage }</p> ) : null
      }
      { 
        (failedTryCreate) ? ( <p>{ errorMessage }</p> ) : null
      } */}
    </>
  )
}
