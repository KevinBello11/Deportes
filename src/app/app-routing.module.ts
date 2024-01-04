import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { DAZNComponent } from './Components/dazn/dazn.component';
import { MenuComponent } from './Components/menu/menu.component';

const routes: Routes = [
  { path: "Menu", component:MenuComponent },
  { path: "Inicio", component:InicioComponent },
  { path: "Dazn", component:DAZNComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
