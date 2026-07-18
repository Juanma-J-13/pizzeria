import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sucursal-selector',
  standalone: false,
  templateUrl: './sucursal-selector.html',
  styleUrl: './sucursal-selector.scss',
})
export class SucursalSelector {
  @Input()
    sucursal: string = "";
  @Output()
    changeSucursal = new EventEmitter<string>();

  elegirSucursal(nombre: string){
    this.changeSucursal.emit(nombre);
  }
  
}
