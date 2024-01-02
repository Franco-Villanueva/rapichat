import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit {
  message: string = '';
  userName: string = '';
  chatMessages: { user: string; message: string }[] = [];
  isUserNameSet: boolean = false;
  path: string = '';

  constructor(private socketService: SocketService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerCurrentPath();
    this.socketService.receiveMessage((data) => {
      console.log('Mensaje recibido:', data);
      this.chatMessages.push(data);
      console.log('chatMessages:', this.chatMessages);
    });
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }

  setUserName() {
    if (this.userName.trim() !== '') {
      this.socketService.setUser(this.userName);
      this.isUserNameSet = true; 
    }
  }

  obtenerCurrentPath() {
    // Obtener el path actual
    const pathSegments = this.activatedRoute.snapshot.url.map(segment => segment.path);
  
    // Separar el path usando el carácter '_'
    const pathSeparado = pathSegments.join('-');
  
    // Obtener el último elemento después de separar por '_'
    const segmentosSeparados = pathSeparado.split('-');
    this.path = segmentosSeparados[segmentosSeparados.length - 1];
  }
  
}