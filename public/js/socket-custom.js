var socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Conectado con el servidor');
});
// escuchar
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});

// enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp)
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});