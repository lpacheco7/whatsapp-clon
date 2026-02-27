import React from 'react'
import './ChatMessages.css'
export default function ChatMessages({ contact_selected }) {
    return (
        <div className='messages'>
            {
                contact_selected.messages.map(message => {
                    return (
                        <div key={message.id} className={message.send_by_me ? 'message-sent' : 'message-received'}>
                            <p>{message.text}</p>
                            <div className='message-info'>
                                <span>{message.created_at}</span>
                                <span>{message.is_read ? 'Leido' : 'No leido'}</span>
                            </div>

                        </div>
                    )
                }
                )
            }
        </div>
    )
}
