'use client'
import { requestData } from '@/app/service/request'
import { useEffect, useState } from 'react'
import Loading from '@/app/component/Loading';
import Event from '@/app/component/Event';
// import { propsEvent } from '@/app/types/propsEvent';



export default function EventId(
   { params }: {params: {id: string}}, 
) {
  const [eventById, setEventById] = useState([]);

  const getEvent = async (endpoint: string) => {
    const response =  await requestData(endpoint)
    .then((response ) => setEventById(response))
    .catch((error) => console.log(error));
  } 
  
  // => 
    // .then((response ) => setEventById(response))
    // .catch((error) => console.log(error));

  useEffect(() => {
    const endpoint = `/event/${params.id}`;
    if(eventById.length === 0) {
      getEvent(endpoint)
    }
  }, [eventById, params.id])
  // console.log('eventById', eventById);
  if(!eventById){
    return <Loading />
  }
  // const { eventName, eventDate, eventTime, eventType, description } = eventById;

  
    return (
      <main>
        <h1>Event By Id</h1>
        <Event
          eventName={ eventById.eventName }
          eventDate={ eventById.eventDate }
          eventTime={ eventById.eventTime }
          eventType={ eventById.eventType }
          description={ eventById.description }
          />

      </main>
        

    )
}