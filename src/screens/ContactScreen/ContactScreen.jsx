import React, { useContext } from 'react'
import { useParams } from 'react-router'
import ContactsSideBar from '../../components/ContacSideBar/ContactSideBar'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)

  //obtengo el id del contacto seleccionado a traves de los parametros de la url
  const { contact_id } = useParams()


  const contact_selected = contacts.find(contact => contact.id == contact_id)
  return (
    <div>
      <ContactsSideBar />
      {
        !contact_selected
          ? <div>
            <h1>El contacto seleccionado no existe</h1>
          </div>
          : <div>
            <h1>El contacto seleccionado es: {contact_selected.name}</h1>
          </div>
      }
      <div> {/* HACER UN COMPONENTE PARA EL CHAT */}
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
      <form> {/* HACER UN COMPONENTE PARA EL INPUT */}
        <textarea placeholder='Escribe un mensaje...' />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
