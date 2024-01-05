import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('drawer') drawer!: MatSidenav; // Obtener la referencia al mat-sidenav
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  );
  isSidenavOpen: boolean = false; // Variable para controlar la apertura/cierre del menú

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleSidenav(): void {
    if (this.drawer) {
      this.isSidenavOpen = !this.isSidenavOpen; // Alternar el estado de la variable
      if (this.isSidenavOpen) {
        this.drawer.open(); // Abrir el mat-sidenav
      } else {
        this.drawer.close(); // Cerrar el mat-sidenav
      }
    }
  }
}