import React from 'react'
import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
    return (
        <div>
            <h1>Error 404</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}
