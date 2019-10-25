const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http')


const routes = require('./routes')

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-u4uat.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const connectedUsers = {};

io.on('connection', socket => {
    console.log('Usuario conectado', socket.id);

    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;

});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();

})

// Tipos de rotas
//GET - Buscar uma informação no back, ex: lista usuarios
//POST - Criar uma nova informação no back, ex>  criar novo usuario
//PUT - Editar uma informação que já existe no back
//DELETE - Deleta uma informação no back

//req.query.nome = acessar query params (Para filtros)
//req.params = Acessar router params (para edição e deletar)
//req.body = Acessar corpo da requisição(Para criação e edição)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);

const PORT = 3333;
server.listen(PORT);
console.log('Rodando no localHost:' + PORT);

