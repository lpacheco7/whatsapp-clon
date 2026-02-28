import React, { useContext } from 'react'
import { useParams } from 'react-router'
import ContactsSideBar from '../../components/ContacSideBar/ContactSideBar'
import { ContactsContext } from '../../Context/ContactsContext'
import SendMessage from '../../components/SendMessage/SendMessage'
import './ContactScreen.css'
import ChatMessages from '../../components/ChatMessages/ChatMessages'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router'


export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => contact.id == contact_id)
  return (
    <div className='contact-screen'>
      <div className='contact-sidebar-container'>
        <ContactsSideBar />
      </div>

      <div className='chat'>
        <div className='contact-selected'>
          <div className='back-arrow'>
            <Link to={'/'} >
              <IoIosArrowBack />
            </Link>
          </div>
          <img className='profile-picture'
            src={contact_selected.profile_picture}
            alt={contact_selected.name}
          />
          <div className='contact-info'>
            <h2 style={{ margin: 0, }}>{contact_selected.name}</h2>
            <span>Última conexión: {contact_selected.last_time_connection}</span>
          </div>
        </div>
        <div className='messages'>
          <ChatMessages contact_selected={contact_selected} />
        </div>
        <SendMessage contact_id={contact_id} />
      </div>
    </div>
  )
}
