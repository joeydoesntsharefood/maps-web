import React from 'react'
import CardRender from './components/CardRender/CardRender';
import events from './mock/events/events';
import { IEvent, IContent } from './utils/Interfaces/IEvent';

function App() {
  const renderEvents = events as []
  return (
    <>
      {
        renderEvents.map((item: IEvent<IContent>) => (
          <CardRender
            key={item._id}
            title={item.content.title}
          >
            {item.content.text}
          </CardRender>
        ))
      }
    </>
  )
}

export default App
