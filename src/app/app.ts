import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Pervis Pizzeria');

  mostrarPagina = false;
  sucursalElegida = "";

  elegirSucursal(nombre: string){
    this.sucursalElegida = nombre;
    this.mostrarPagina = true;
  }
  /** carrito: Pizza[] = [];  * 
  agregarCarrito(pizza: Pizza){
    if(pizza.quantity == 0){
      return;
    }

   const existe = this.carrito.find(
    p => p.name === pizza.name
   );

   if(existe){
     this.carrito = this.carrito.map(
      p => p.name === pizza.name ? { ...p, quantity: p.quantity + pizza.quantity } : p
    );
   }else{
    this.carrito = [...this.carrito, { ...pizza }];
   }
  
   pizza.quantity = 0;
  }

  eliminarPizza(pizza: Pizza){
    this.carrito = this.carrito.filter(
      p => p.name !== pizza.name
    );
  }
  vaciarCarrito(){
    this.carrito = [];
  }*/
}
