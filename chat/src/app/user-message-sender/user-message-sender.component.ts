import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-message-sender',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-message-sender.component.html',
  styleUrls: ['./user-message-sender.component.css']
})
export class UserMessageSenderComponent {
  @Input() usuario: string = ''; // Nombre del usuario que envía el mensaje
  @Output() mensajeEnviado = new EventEmitter<string>(); // Evento que emite el mensaje

  mensaje: string = '';

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.mensajeEnviado.emit(`${this.usuario}: ${this.mensaje.trim()}`);
      this.mensaje = ''; // Limpiar el campo después de enviar
    }
  }
}
