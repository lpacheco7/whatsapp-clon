import React, { useContext } from 'react'
import './SendMessage.css'
import { IoSend } from "react-icons/io5";
import { ContactsContext } from '../../Context/ContactsContext';

export default function SendMessage({ contact_id }) {

    const { addNewMessage } = useContext(ContactsContext)

    function handleSubmitNewMessage(e) {
        e.preventDefault()
        const new_message = e.target.mensaje_nuevo.value
        e.target.mensaje_nuevo.value = ''
        addNewMessage(contact_id,new_message)
    }
    return (
        <div>
            <form onSubmit={handleSubmitNewMessage} id='777'>
                <label className='form-label' htmlFor="mensaje_nuevo">Mensaje Nuevo</label>
                <textarea placeholder="Escribe un mensaje" id='mensaje_nuevo' name='mensaje_nuevo' required/>
                <button type='submit'><span><IoSend/></span></button>
            </form>
        </div>
    )
}
