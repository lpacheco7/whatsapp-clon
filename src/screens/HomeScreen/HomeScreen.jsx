import React from 'react'
import ContactSideBar from '../../components/ContacSideBar/ContactSideBar'

export default function HomeScreen({contactsState}) {
  return (
    <div>
      <ContactSideBar contactsState={contactsState} />
      <h1>HOLA</h1>
    </div>
  )
}
