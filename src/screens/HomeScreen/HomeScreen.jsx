import React from 'react'
import ContactSideBar from '../../components/ContacSideBar/ContactSideBar'

export default function HomeScreen({ contactsState }) {
  return (
    <div className='home-screen'>
      <ContactSideBar contactsState={contactsState} />
    </div>
  )
}
