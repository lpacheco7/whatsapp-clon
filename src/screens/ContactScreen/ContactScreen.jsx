import React, { useContext } from 'react'
import { useParams } from 'react-router'
import ContactsSideBar from '../../components/ContacSideBar/ContactSideBar'
import { ContactsContext } from '../../Context/ContactsContext'
import SendMessage from '../../components/SendMessage/SendMessage'
import './ContactScreen.css'
export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)
  //obtengo el id del contacto seleccionado a traves de los parametros de la url
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => contact.id == contact_id)
  return (
    <div className='contact-screen'>
      <ContactsSideBar />

      {/* COMPONENTE ContactInfo */}
      
      <div className='chat'>
        {
          !contact_selected /* COMPONENTE ContactMessages*/
            ? <div>
              <h1>El contacto seleccionado no existe</h1>
            </div>
            : <div>
              <h1>El contacto seleccionado es: {contact_selected.name}</h1>
              <h2>Última vez conectado: {contact_selected.last_time_connection}</h2>
            </div>
        }
        
        <div className='messages'> {/* HACER UN COMPONENTE PARA EL CHAT */}
          {
            contact_selected.messages.map(message => {
              return (
                <div key={message.id}>
                  {
                    message.send_by_me
                      ? <h3>Enviado por: mi</h3>
                      : <h3>Enviado por: {contact_selected.name}</h3>
                  }
                  <p>{message.text}</p>
                  <span>{message.created_at}</span>
                  <br />
                  <span>{message.is_read ? 'Leido' : 'No leido'}</span>
                  <hr />
                </div>
              )
            }
            )
          }
        </div>
        <SendMessage />
      </div>
    </div>
  )
}
