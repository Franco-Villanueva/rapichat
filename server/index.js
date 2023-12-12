const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const logger = require('morgan')

const server = express();
server.use(logger('dev'))




server.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/Front/index.html');
});


module.exports = {server};