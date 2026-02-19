import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'

export default function ContactSideBar({ contactsState }) {
    /* useContext es un hook que nos permite consumir el contexto */
    /* recibe por parametro el contexto que queremos consumir */
    /* una vez consumido nos traera el valor del value del contexto */
    const { contacts, favorite_name } = useContext(ContactsContext)
    return (
        <div>
            <h2>Chats</h2>
            <div>
                {
                    contacts.map(
                        (contact) => {
                            return (
                                <div>
                                    <Link
                                        to={`/contact/${contact.id}`}
                                        key={contact.id}
                                    >
                                        <img
                                            src={contact.profile_picture}
                                            alt={contact.name}
                                            style={
                                                {
                                                    width: '200px'
                                                }
                                            }
                                        />
                                        <h3>{contact.name}</h3>
                                        <span>{contact.last_time_connection}</span>
                                        <br />
                                        <hr />
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
