import React from 'react'
import './SendMessage.css'
import { IoSend } from "react-icons/io5";

export default function SendMessage() {
    return (
        <div>
            <form>
                <textarea placeholder='Escribe un mensaje' />
                <button type='submit'><span><IoSend/></span></button>
            </form>
        </div>
    )
}
