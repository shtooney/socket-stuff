let socket = io();
socket.on('connect', function() {

   socket.emit('createMessage', {
        from: 'tom@tom.com',
        text: 'Howdy! Nice.'
    });

});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('new message: ', message);
});