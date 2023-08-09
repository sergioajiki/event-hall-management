'use client'

import { useEffect, useState } from 'react';
import { requestData } from '@/app/service/request'
import Loading from '@/app/component/Loading';
import { propsUser } from '@/app/types/propsUser';
import User from '@/app/component/User';
import Header from '../component/Header';
import '@/app/component/style/Users.css'



export default function AllUsers() {
  const [userList, setUserList] = useState([]);
  const getAllUser = async (endpoint: string) => {
    const response = await requestData(endpoint);
    setUserList(response);
  }

  useEffect(() => {
    const endpoint = '/users';
    if (userList.length === 0) {
      getAllUser(endpoint)
    }
  }, [userList]);

  if (!userList.length) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <span className="eventInfo">
        <h1>Usuários</h1>
        <span className="cards">
          {
            userList.map((user: propsUser) => (
              <User
                key={user.id}
                id={user.id}
                username={user.username}
                email={user.email}
                role={user.role}
                status={user.status}
              />
            ))
          }
        </span>
      </span>
    </>
  )
}
