import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import Message from './Message'

export default function MessageIcon() {
    const [messages, setMessages] = React.useState(['1', '2', '3', '4'])
    const [show, setShow] = React.useState(true);


  return (
    <div className='message-icon__wrapper'>
         <FaEnvelopeOpenText className="image" size={18}/>
         {
            messages.length > 0 &&
            <Message setshow={setShow} messages={messages}/> 
         }

    </div>
  )
}
