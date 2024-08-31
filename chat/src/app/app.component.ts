import { Component } from '@angular/core';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { UserMessageSenderComponent } from './user-message-sender/user-message-sender.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChatBoxComponent, UserMessageSenderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensajes: string[] = []; // Almacena todos los mensajes
  usuarios: string[] = ['Juan', 'Pablo']; // Nombres de usuarios

  agregarMensaje(mensaje: string) {
    this.mensajes.push(mensaje);
  }
}
