import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../Services/video.service';

interface Video {
  title: string;
  embedUrl: string;
  thumbnail: string;
  channelDescription: string;
}

@Component({
  selector: 'app-dazn',
  templateUrl: './dazn.component.html',
  styleUrls: ['./dazn.component.css']
})
export class DAZNComponent {
  videoPrincipal: SafeResourceUrl | null = null;
  videosSugeridos: Video[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.cargarVideosDazn();
  }

  cargarVideosDazn(): void {
    this.videosSugeridos = this.videoService.getSuggestedVideos();
    const videoPrincipal = this.videoService.getPrincipalVideo();
    this.mostrarVideoPrincipal(videoPrincipal);
  }

  mostrarVideoPrincipal(video: Video): void {
    this.videoPrincipal = this.sanitizer.bypassSecurityTrustResourceUrl(video.embedUrl);
  }

  cargarVideo(video: Video): void {
    const index = this.videosSugeridos.findIndex(vid => vid.title === video.title);

    if (index !== -1) {
      const selectedVideo = this.videosSugeridos.splice(index, 1)[0];
      this.videosSugeridos.unshift(selectedVideo);

      this.mostrarVideoPrincipal(video);
    }
  }
}