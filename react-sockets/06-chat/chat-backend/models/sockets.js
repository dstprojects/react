

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // TODO: validar el JWT
            // si el token no es válido, desconectar

            // TODO: Saber que usuario está activo mediante el UID
            
            // TODO: Emitir todos los usuarios conectados

            // TODO: Socket join

            // TODO: Escuchar cuando el cliente manda un mensahe
            // mensaje-personal

            // TODO: Disconnect
            // Marcar en la BD que el usuario se desconectó 

            
        
        });
    }


}


module.exports = Sockets;