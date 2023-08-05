'use client'

import React, { useState } from 'react'
import LoginPage from '../(public)/login/page'

export default function Header() {
  const [isLogged, setIsLogged] = useState(false)

  
  return (

    <>
      <button>Logout</button>
    </>
    
  )
}