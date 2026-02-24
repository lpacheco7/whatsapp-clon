import React from 'react'
import './ChatMessages.css'
export default function ChatMessages({ contact_selected }) {
    return (
        <div>
            {
                contact_selected.messages.map(message => {
                    return (
                        <div key={message.id} className={message.send_by_me ? 'message-sent' : 'message-received'}>
                            {
                                message.send_by_me
                                    ? <h3>Enviado por: mi</h3>
                                    : <h3>Enviado por: {contact_selected.name}</h3>
                            }
                            <p>{message.text}</p>
                            <span>{message.created_at}</span>
                            <br />
                            <span>{message.is_read ? 'Leido' : 'No leido'}</span>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
