let socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar (on)
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar información (emit)
socket.emit('enviarMensaje', {
    usuario: 'Iván',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Eschando informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});