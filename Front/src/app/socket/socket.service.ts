import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private user: string = 'Usuario'; // Nombre predeterminado

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  setUser(user: string) {
    this.user = user;
  }

  getUser(): string {
    return this.user;
  }

  receiveMessage(callback: (data: { user: string; message: string }) => void) {
    this.socket.on('chat message', callback);
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', { user: this.user, message }); // Incluye el nombre del usuario
  }
}