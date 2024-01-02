import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  salaId: string = ''; // Propiedad para almacenar el número de sala ingresado

  constructor(private router: Router) {}

  unirseASala() {
    // Obtener el ID de la sala ingresado
    const salaIdIngresado = this.salaId.trim();
    
    // Verificar si se proporcionó un número de sala válido
    if (salaIdIngresado) {
      // Redirigir a la sala con el ID ingresado
      this.router.navigate([`/chat/nueva-sala-${salaIdIngresado}`]);
    } else {
      
      // Manejar caso de sala no válida (puedes agregar lógica adicional aquí)
      console.error('Ingrese un número de sala válido', salaIdIngresado);
    }
  }

  crearSala() {
    // Simulación: generar un nuevo ID para la sala creada
    const nuevaSalaId = this.generarNuevoId();

    // Redirigir a la sala recién creada
    this.router.navigate([`/chat/${nuevaSalaId}`]);
  }

  private generarNuevoId(): string {
    // Simulación: generar un nuevo ID para la sala creada (puede ser generado de manera única)
    return "nueva-sala-" + Math.floor(Math.random() * 1000);
  }
}
