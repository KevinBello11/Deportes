import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Video, VideoService } from '../../Services/video.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  daznVideos: any[] = [];
  espnVideos: any[] = [];
  directvVideos: any[] = [];
  videoPrincipal: Video | null = null;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    // Obtener videos de los servicios correspondientes
    this.daznVideos = this.videoService.getVideosFromDazn();
    this.espnVideos = this.videoService.getVideosFromEspn();
    this.directvVideos = this.videoService.getVideosFromDirectv();
  }
  



    imagenes: string[] = [
      'https://images.daznservices.com/di/library/DAZN_News/76/c1/dazn_1l0dix79g3wai1r4dx87ueh5nj.jpg?t=-1109636787',
      'https://espnpressroom.com/latinamerica/files/2023/08/S_LigasEuropeas_5Propiedades_16x9-3.jpg',
      'https://image.discovery.indazn.com/ca/v3/ca/none/e112441b-2cad-4e25-b699-fd746a981b6c/fill/center/top/none/85/2400/1350/webp/image',

    ];
  
    currentImageIndex: number = 0;
    intervalId: any; // Variable para almacenar el ID del intervalo
  
   

    changeImage(): void {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imagenes.length;
    }
  
    ngOnDestroy(): void {
      // Limpia el intervalo cuando el componente se destruye para evitar fugas de memoria
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

}
