import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    imagenes: string[] = [
      'https://images.daznservices.com/di/library/DAZN_News/76/c1/dazn_1l0dix79g3wai1r4dx87ueh5nj.jpg?t=-1109636787',
      'https://espnpressroom.com/latinamerica/files/2023/08/S_LigasEuropeas_5Propiedades_16x9-3.jpg',
      'https://image.discovery.indazn.com/ca/v3/ca/none/e112441b-2cad-4e25-b699-fd746a981b6c/fill/center/top/none/85/2400/1350/webp/image',

    ];
  
    currentImageIndex: number = 0;
    intervalId: any; // Variable para almacenar el ID del intervalo
  
    ngOnInit(): void {
      // Llama a la función para cambiar la imagen cada 3 segundos (3000 milisegundos)
      this.intervalId = setInterval(() => {
        this.changeImage();
      }, 8000);
    }
  
    changeImage(): void {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagenes.length;
    }
  
    ngOnDestroy(): void {
      // Limpia el intervalo cuando el componente se destruye para evitar fugas de memoria
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

    
  
    daznVideos: any[] = [
      { title: 'DAZN LaLiga', thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jejfa7zjwwah17fk7z2md5t6e_image-header_pEs_1688456206000&quality=70', link: '/Dazn' },
      { title: 'DAZN 1', thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jyzsp7ogoq5l13hsu4ioe27t3_image-header_pEs_1691510997000&quality=70', link: '/Dazn1' },
      { title: 'DAZN 2', thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=1b6gimlr2r5sb1w6yi6rbhu5v6_image-header_pEs_1691501685000&quality=70', link: '/Dazn2' },
      // ... más videos de DAZN
    ];
  
    espnVideos: any[] = [
      { title: 'ESPN', thumbnail: '' },
      { title: 'ESPN 2', thumbnail: 'url_thumbnail_4' },
      // ... más videos de ESPN
    ];
  
    directvVideos: any[] = [
      { title: 'DIRECTV', thumbnail: 'url_thumbnail_5' },
      { title: 'DIRECTV 2', thumbnail: 'url_thumbnail_6' },
      // ... más videos de DIRECTV
    ];

}
