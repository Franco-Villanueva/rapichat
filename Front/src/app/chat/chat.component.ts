import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket/socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
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
      this.isUserNameSet = true; // Marcar que el nombre se ha establecido
    }
  }
}