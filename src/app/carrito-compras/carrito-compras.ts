import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-carrito-compras',
  standalone: false,
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.scss',
})
export class CarritoCompras {

  @Input()
    carrito: Pizza[] = [];
  
  @Output()
    eliminar = new EventEmitter<Pizza>();
  @Output()
    vaciar = new EventEmitter<void>();
  
  eliminarPizza(pizza: Pizza){
    this.eliminar.emit(pizza);
  }
  vaciarCarrito(){
    this.vaciar.emit();
  }

  total(): number{
    let total = 0;
    for(const pizza of this.carrito){
      total += pizza.price*pizza.quantity;
    }
    return total;
  }
  subtotal(pizza: Pizza): number{
    return pizza.price*pizza.quantity;
  }

}
