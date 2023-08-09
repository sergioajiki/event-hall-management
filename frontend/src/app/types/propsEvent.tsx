export type User = {
  id: number,
  username: string,
  email: string
}

export type propsEvent = {
    id: number;
    eventName: string,
    eventDate: string,
    eventTime: string,
    eventType: string,
    description: string,
    userList: User[],
    role: string,
    email: string,
  } 

export type EventById = {
  id: number;
  eventName: string,
  eventDate: string,
  eventTime: string,
  eventType: string,
  description: string,
  users: [],
}  

export  type UserList = {
  userList: User[]
}