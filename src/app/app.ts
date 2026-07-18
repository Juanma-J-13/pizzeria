import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Pizzeria');
  /** 
  ES PARA CAMBIAR EL TITULO EN EL INPUT DE APP.HTML
    cambiarTitulo(nuevoTitulo: string){
      this.title.set(nuevoTitulo);
    }
  */
}
