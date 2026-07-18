import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PizzasList } from './pizzas-list/pizzas-list';
import { SucursalSelector } from './sucursal-selector/sucursal-selector';

@NgModule({
  declarations: [App, PizzasList, SucursalSelector],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
