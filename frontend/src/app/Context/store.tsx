'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  userId: number
  setUserId:Dispatch<SetStateAction<number>>
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  role: string
  setRole: Dispatch<SetStateAction<string>>
  status: number
  setStatus: Dispatch<SetStateAction<number>>
};

const GlobalContex = createContext<ContextProps>({
  userId: 0,
  setUserId: (): number => 0,
  username: '',
  setUsername: (): string => '',
  email: '',
  setEmail: (): string => '',
  role: '',
  setRole: (): string => '',
  status: 0,
  setStatus: (): number => 0
})

export const GlobalContexProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(0);

  return (
    <GlobalContex.Provider value={ {
      userId,
      setUserId,
      username,
      setUsername,
      email,
      setEmail,
      role,
      setRole,
      status,
      setStatus
    }}>
      { children }
    </GlobalContex.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContex);

