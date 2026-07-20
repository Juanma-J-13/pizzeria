import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-component',
  standalone: false,
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.scss',
})
export class ContactoComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      piso: [''],
      departamento: [''],
      observaciones: [''],
      pago: ['', Validators.required],

    });
  }

  enviarPedido(){
    console.log(this.formulario.value);
  }
}
