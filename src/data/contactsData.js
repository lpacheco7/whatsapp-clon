const contacts = [
    {
        id: 1,
        name: 'Bart Simpson',
        profile_picture: 'https://i1.sndcdn.com/artworks-3GFmIo5HgxHrFzFf-ciJ7jQ-t500x500.jpg',
        last_time_connection: 'Hace 2 horas',
        messages: [
            {
                id: 1,
                text: 'Hola Bart',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true,
            },
            {
                id: 2,
                text: 'Todo bien, vos?',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true,
            }
        ]
    },
    {
        id: 2,
        name: 'Lisa Simpson',
        profile_picture: 'https://i.pinimg.com/564x/46/09/bb/4609bb338c484cbb3f4b26a320ef9f10.jpg',
        last_time_connection: 'Hace 2 horas',
        messages: [
            {
                id: 1,
                text: 'Lisa, ¿qué tal?',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true,
            },
            {
                id: 2,
                text: 'Todo bien, vos?',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true,
            }
        ]
    },
    {
        id: 3,
        name: 'Homero Simpson',
        profile_picture: 'https://i.ytimg.com/vi/TwYzwloa9_E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzvtQV4k0D0jv1eAWjUsZGLLeh5A',
        last_time_connection: 'Hace 3 horas',
        messages: [
            {
                id: 1,
                text: 'Hola Homero',
                send_by_me: true,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true,
            },
            {
                id: 2,
                text: 'Todo bien, vos?',
                send_by_me: false,
                created_at: '2024-06-01T12:00:00Z',
                is_read: true,
            }
        ]
    },
]

export default contacts