import React, { useContext } from 'react'
import { useParams } from 'react-router'
import ContactsSideBar from '../../components/ContacSideBar/ContactSideBar'
import { ContactsContext } from '../../Context/ContactsContext'
import SendMessage from '../../components/SendMessage/SendMessage'
import './ContactScreen.css'
import ChatMessages from '../../components/ChatMessages/ChatMessages'
export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => contact.id == contact_id)
  return (
    <div className='contact-screen'>
      <ContactsSideBar />

      <div className='chat'>
        <div className='contact'>
          <img className='profile-picture'
            src={contact_selected.profile_picture}
            alt={contact_selected.name}
          />
          <div className='contact-info'>
            <h2>El contacto seleccionado es: {contact_selected.name}</h2>
            <span>Última vez conectado: {contact_selected.last_time_connection}</span>
          </div>
        </div>
        <div className='messages'>
          <ChatMessages contact_selected={contact_selected} />
        </div>
        <div className='send-message'>
          <SendMessage contact_id={contact_id}/>
        </div>
      </div>
    </div>
  )
}
