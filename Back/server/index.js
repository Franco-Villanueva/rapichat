 // back/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);


app.use(cors());

app.use(morgan('dev'));




  const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:4200', // Reemplaza con la URL de tu aplicación Angular
      methods: ['GET', 'POST'],
    },
  });
  
  io.on('connection', (socket) => {
    console.log('Usuario conectado');
  
    socket.on('chat message', (message) => {
      io.emit('chat message', message);
    });
  
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  });


module.exports = {server};