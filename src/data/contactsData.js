const contacts = [
    {
        id: 1,
        name: 'Papá',
        profile_picture: 'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/2085/2016031611550980537a945c7aaa788ccfcdf1b99b5d8f.jpg',
        last_time_connection: 'Hace 15 minutos',
        messages: [
            {
                id: 1,
                text: '¿Viste el partido de River?',
                send_by_me: false,
                created_at: '21:37',
                is_read: true,
            },
            {
                id: 2,
                text: 'No, recién salgo de la facu. ¿Como salió?',
                send_by_me: true,
                created_at: '21:40',
                is_read: true,
            },
            {
                id: 3,
                text: 'Ganamos 2 a 1.',
                send_by_me: false,
                created_at: '21:41',
                is_read: true,
            },
            {
                id: 4,
                text: 'Sufriendo en el segundo tiempo.',
                send_by_me: false,
                created_at: '21:42',
                is_read: true,
            },
        ]
    },
    {
        id: 2,
        name: 'Abuela',
        profile_picture: 'https://media.elobservador.com.uy/p/c2933718adb91294b859bcada00552f9/adjuntos/363/imagenes/100/487/0100487921/256x256/smart/1712334261585webp.webp',
        last_time_connection: 'Hace 1 hora',
        messages: [
            {
                id: 1,
                text: 'Hola, ¿el domingo venís a comer al mediodía?',
                send_by_me: false,
                created_at: '18:48',
                is_read: true,
            },
            {
                id: 2,
                text: 'Puede ser, ¿qué vamos a comer?',
                send_by_me: true,
                created_at: '19:31',
                is_read: true,
            },
            {
                id: 3,
                text: 'Milanesas con puré, como le gustan a vos y a tu hermano.',
                send_by_me: false,
                created_at: '19:33',
                is_read: true,
            },
            {
                id: 4,
                text: 'Entonces vamos.',
                send_by_me: true,
                created_at: '19:47',
                is_read: true,
            },
            {
                id: 5,
                text: 'Mira que arrancamos a comer a las 12:30.',
                send_by_me: false,
                created_at: '19:50',
                is_read: true,
            },
            {
                id: 6,
                text: ' No lleguen tarde...',
                send_by_me: false,
                created_at: '19:50',
                is_read: true,
            },

        ]
    },
    {
        id: 3,
        name: 'Miguel (Jefe)',
        profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSXyw1NNPUy0BQdC5LN-5ql-_T5f0RxZlJg&s',
        last_time_connection: 'Hace 3 horas',
        messages: [
            {
                id: 1,
                text: 'Buen día. ¿Revisaste lo que te marqué en el informe?',
                send_by_me: false,
                created_at: '08:01',
                is_read: true,
            },
            {
                id: 2,
                text: 'Sí, estoy corrigiendo las conclusiones.',
                send_by_me: true,
                created_at: '08:02',
                is_read: true,
            },
            {
                id: 3,
                text: 'Necesito que quede sólido.',
                send_by_me: false,
                created_at: '08:03',
                is_read: true,
            },
            {
                id: 5,
                text: 'Hoy lo ve dirección.',
                send_by_me: false,
                created_at: '08:03',
                is_read: true,
            },
            {
                id: 6,
                text: 'Antes del mediodía te lo mando.',
                send_by_me: true,
                created_at: '08:03',
                is_read: true,
            }
        ]
    },
    {
        id: 4,
        name: 'Camila (RRHH)',
        profile_picture: 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/565633610_1390442776417084_8361693122645684954_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0E_dj9tBUGMQ7kNvwGxnSQJ&_nc_oc=AdnPGFZLL8vCKyMNhjUXjM9OJLnOrIx5ScHlQEyvTSDuMzyFRQfElMV4PJygwllraL0&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=xVPpWSIx5XhQvHq19jZs-w&oh=00_Aft4xlU0RqAdn0WnrC6LC4iVt0xmrvGq7-y1-EvJW3s7Iw&oe=69A6B126',
        last_time_connection: 'En línea',
        messages: [
            {
                id: 1,
                text: 'Hola, quería consultar cómo tengo que hacer para pedir vacaciones.',
                send_by_me: true,
                created_at: '09:01',
                is_read: true,
            },
            {
                id: 2,
                text: 'Buen día. ¿Para qué fechas estás pensando?',
                send_by_me: false,
                created_at: '09:03',
                is_read: true,
            },
            {
                id: 3,
                text: 'La segunda quincena de enero, del 15 al 26.',
                send_by_me: true,
                created_at: '09:04',
                is_read: true,
            },
            {
                id: 4,
                text: 'Déjame revisar cuántos días tenés disponibles.',
                send_by_me: false,
                created_at: '09:06',
                is_read: true,
            },
            {
                id: 5,
                text: 'Tenés 10 días pendientes. Esas fechas están dentro de lo que corresponde.',
                send_by_me: false,
                created_at: '09:08',
                is_read: true,
            },
            {
                id: 6,
                text: 'Perfecto. ¿Necesito que me confirme Miguel primero?',
                send_by_me: true,
                created_at: '09:09',
                is_read: true,
            },
            {
                id: 7,
                text: 'Sí, primero la aprobación del responsable del área y después lo cargamos en el sistema.',
                send_by_me: false,
                created_at: '09:11',
                is_read: true,
            },
            {
                id: 8,
                text: 'Dale, hablo con él y te aviso.',
                send_by_me: true,
                created_at: '09:12',
                is_read: true,
            },
            {
                id: 9,
                text: 'Cuando lo tengas confirmado, mandame un mail así queda formalizado.',
                send_by_me: false,
                created_at: '09:13',
                is_read: false,
            }
        ]
    },
    {
        id: 5,
        name: 'Fran (Hermano)',
        profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpt9M0h7gihk3lrXmX6D31yYSXPCidrfptbw&s',
        last_time_connection: 'Hace 5 minutos',
        messages: [
            {
                id: 1,
                text: 'Che, ¿me prestás el auto hoy?',
                send_by_me: false,
                created_at: '14:31',
                is_read: true,
            },
            {
                id: 2,
                text: '¿A dónde vas?',
                send_by_me: true,
                created_at: '14:45',
                is_read: true,
            },
            {
                id: 3,
                text: 'A lo de unos amigos.',
                send_by_me: false,
                created_at: '14:48',
                is_read: true,
            },
            {
                id: 4,
                text: 'Te llevo yo.',
                send_by_me: true,
                created_at: '14:50',
                is_read: true,
            },
            {
                id: 5,
                text: 'Dalee préstamelo.',
                send_by_me: false,
                created_at: '14:51',
                is_read: false,
            },
            {
                id: 4,
                text: 'Bueno, pero cargale nafta después.',
                send_by_me: true,
                created_at: '14:55',
                is_read: false,
            },
            {
                id: 5,
                text: 'Y no tomes alcohol.',
                send_by_me: true,
                created_at: '14:55',
                is_read: false,
            },
        ]
    }
]

export default contacts