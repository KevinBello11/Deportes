import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export interface Video {
  title: string;
  embedUrl: string;
  thumbnail: string;
  channelDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  getVideosFromDazn(): Video[] {
    return [
      {
        title: 'DAZN LaLiga',
        embedUrl: 'https://dearch.vin/mpdk.html?get=aHR0cHM6Ly9kY2UtYWstbGl2ZXd3ZGF6bi5ha2FtYWl6ZWQubmV0L2Rhc2hkcm0vZGF6bi1saW5lYXItMDQzL3N0cmVhbS5tcGQ/cD13ZWI&key=ODJmOGUyYTE3ZGFjNDRjMGExOGY2NjA0NzkzNDljNTk&key2=MWIxNDRmNzNlNmZlZmU5MWNkMDVmODUwZTJiNTg5ZDA',
        thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jejfa7zjwwah17fk7z2md5t6e_image-header_pEs_1688456206000&quality=70',
        channelDescription: 'Descripción del canal para DAZN 1'
      },
      {
        title: 'DAZN 1',
        embedUrl: 'https://derealfama.one/dazn1.html',
        thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jyzsp7ogoq5l13hsu4ioe27t3_image-header_pEs_1691510997000&quality=70',
        channelDescription: 'Descripción del canal para DAZN 1'
      },
      {
        title: 'DAZN 2',
        embedUrl: 'https://derealfama.one/dazn2.html',
        thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=1b6gimlr2r5sb1w6yi6rbhu5v6_image-header_pEs_1691501685000&quality=70',
        channelDescription: 'Descripción del canal para DAZN 2'
      },
      // ... más videos de DAZN
    ];
  }

  getVideosFromEspn(): any[] {
    // Lógica para obtener videos de ESPN
    return [
      { title: 'Video de ESPN 1', thumbnail: 'url1' },
      { title: 'Video de ESPN 2', thumbnail: 'url2' },
      // ... más videos de ESPN
    ];
  }

  // Otros métodos para obtener videos de diferentes proveedores

  // Por ejemplo, un método para obtener videos de DIRECTV
  getVideosFromDirectv(): any[] {
    // Lógica para obtener videos de DIRECTV
    return [
      { title: 'Video de DIRECTV 1', thumbnail: 'url1' },
      { title: 'Video de DIRECTV 2', thumbnail: 'url2' },
      // ... más videos de DIRECTV
    ];
  }

  getPrincipalVideo(): any {
    // Lógica para obtener el video principal
    return {
      title: 'Video Principal',
      embedUrl: 'https://dearch.vin/mpdk.html?get=aHR0cHM6Ly9kY2UtYWstbGl2ZXd3ZGF6bi5ha2FtYWl6ZWQubmV0L2Rhc2hkcm0vZGF6bi1saW5lYXItMDQzL3N0cmVhbS5tcGQ/cD13ZWI&key=ODJmOGUyYTE3ZGFjNDRjMGExOGY2NjA0NzkzNDljNTk&key2=MWIxNDRmNzNlNmZlZmU5MWNkMDVmODUwZTJiNTg5ZDA', // Reemplaza con la URL del video principal
      thumbnail: 'url_del_thumbnail',
      channelDescription: 'Descripción del canal para el video principal'
    };
  }
  
  getSuggestedVideos(): any[] {
    // Lógica para obtener los videos sugeridos
    return [
      // Lista de videos sugeridos
      {
        title: 'DAZN LaLiga',
        embedUrl: 'https://dearch.vin/mpdk.html?get=aHR0cHM6Ly9kY2UtYWstbGl2ZXd3ZGF6bi5ha2FtYWl6ZWQubmV0L2Rhc2hkcm0vZGF6bi1saW5lYXItMDQzL3N0cmVhbS5tcGQ/cD13ZWI&key=ODJmOGUyYTE3ZGFjNDRjMGExOGY2NjA0NzkzNDljNTk&key2=MWIxNDRmNzNlNmZlZmU5MWNkMDVmODUwZTJiNTg5ZDA',
        thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jejfa7zjwwah17fk7z2md5t6e_image-header_pEs_1688456206000&quality=70',
        channelDescription: 'Descripción del canal para DAZN 1'
      },
      {
        title: 'DAZN 1',
        embedUrl: 'https://derealfama.one/dazn1.html',
        thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=jyzsp7ogoq5l13hsu4ioe27t3_image-header_pEs_1691510997000&quality=70',
        channelDescription: 'Descripción del canal para DAZN 1'
      },
      {
        title: 'DAZN 2',
        embedUrl: 'https://derealfama.one/dazn2.html',
        thumbnail: 'https://image.discovery.indazn.com/ca/v2/ca/image?id=1b6gimlr2r5sb1w6yi6rbhu5v6_image-header_pEs_1691501685000&quality=70',
        channelDescription: 'Descripción del canal para DAZN 2'
      },
      {
        title: 'ESPN',
        embedUrl: 'https://derealfama.one/dazn2.html',
        thumbnail: 'https://logowik.com/content/uploads/images/espn5188.jpg',
        channelDescription: 'Descripción del canal para ESPN '
      },
      {
        title: 'ESPN 2',
        embedUrl: 'https://derealfama.one/dazn2.html',
        thumbnail: 'https://logowik.com/content/uploads/images/espn24510.jpg',
        channelDescription: 'Descripción del canal para ESPN '
      },
      {
        title: 'ESPN 3 ',
        embedUrl: 'https://derealfama.one/dazn2.html',
        thumbnail: 'data:image/png;base64,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',
        channelDescription: 'Descripción del canal para ESPN '
      },
      {
        title: 'ESPN Deportes',
        embedUrl: 'https://latele-envivo.com/Deportes/espn-deportes/op2.php',
        thumbnail: 'https://logowik.com/content/uploads/images/espn-deportes1843.logowik.com.webp',
        channelDescription: 'Descripción del canal para ESPN '
      },
      {
        title: 'DSports',
        embedUrl: 'https://derealfama.one/dazn2.html',
        thumbnail: 'https://www.directvsports.com/__export/1674066777851/sites/dsports/arte/apps/twitter_sumary_card__600x314.png',
        channelDescription: 'Descripción del canal para ESPN '
      },
      // Agregar más videos sugeridos según sea necesario
    ];
  }
  // Otros métodos relacionados con la gestión de videos
}
