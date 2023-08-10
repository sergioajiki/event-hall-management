'use client'
import React, { useEffect, useState } from "react";
import { User, UserList } from "../types/propsEvent";

export default function UserList({ userList }: UserList ) {

  return (
    <>
      <div>
          <p>Lista de Inscritos</p>
        {userList.map((user: User, index: number) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </div>
    </>
  )
}