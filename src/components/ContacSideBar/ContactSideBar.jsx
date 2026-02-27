import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'
import './ContactSideBar.css'

export default function ContactSideBar({ contactsState }) {
    /* useContext es un hook que nos permite consumir el contexto */
    /* recibe por parametro el contexto que queremos consumir */
    /* una vez consumido nos traera el valor del value del contexto */
    const { contacts } = useContext(ContactsContext)
    return (
        <div className='contact-sidebar'>
            <Link to={'/'}> <h2>Chats</h2> </Link>
            <div className='contact-list'>
                {
                    contacts.map(
                        (contact) => {
                            return (
                                <div>
                                    <Link
                                        to={`/contact/${contact.id}`}
                                        key={contact.id}
                                    >
                                        <div className='contact'>
                                            <img className='profile-picture-sidebar'
                                                src={contact.profile_picture}
                                                alt={contact.name}
                                            />
                                            <h3>{contact.name}</h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
