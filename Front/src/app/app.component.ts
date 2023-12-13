import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChatComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front';
}





// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ChatComponent } from './chat/chat.component';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   // El atributo "standalone" no es necesario aquí
//   // Debes usar "styles" en lugar de "styleUrl" para las hojas de estilo
//   styleUrls: ['./app.component.css'],
//   // Importa FormsModule aquí en "imports"
//   imports: [CommonModule, FormsModule],
//   // Asegúrate de que "RouterOutlet" y "ChatComponent" estén en "declarations"
//   declarations: [ChatComponent],
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//   title = 'Front';
// }