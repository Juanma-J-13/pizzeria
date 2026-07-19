import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ContactoComponent } from './contacto-component/contacto-component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
