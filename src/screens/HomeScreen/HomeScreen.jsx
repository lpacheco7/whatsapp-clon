import React from 'react'
import ContactSideBar from 'c:/Users/USUARIO/Desktop/LORENZO/CURSOS/FULL STACK/CLASE_27/src/components/ContacSideBar/ContactSideBar'

export default function HomeScreen({contactsState}) {
  return (
    <div>
      <ContactSideBar contactsState={contactsState} />
    </div>
  )
}
