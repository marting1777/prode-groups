let socket = io()

socket.on('connect', function () {
    console.log('Connected to server')

    socket.emit('createEmail', {
        to: 'jen@example',
        text: 'Hey. This is Martin'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newEmail', function (email) {
    console.log('New email', email)
})