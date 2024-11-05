import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  inputValue: string = "";

  constructor(private platform: Platform) {}

  async downloadFile() {
    // Crear un Blob a partir del contenido
    const blob = new Blob([this.inputValue], { type: 'text/plain' });

    // Verificar si se está ejecutando en un dispositivo móvil o en un navegador
    if (this.platform.is('cordova')) {
      // Móvil: Utilizar Capacitor Filesystem para guardar el archivo
      try {
        await Filesystem.writeFile({
          path: 'documento.txt', // Nombre del archivo
          data: this.inputValue,
          directory: Directory.Documents,
          encoding: Encoding.UTF8,
        });
        console.log('Archivo guardado exitosamente');
      } catch (e) {
        console.error('Error al guardar el archivo', e);
      }
    } else {
      // Navegador: Crear un enlace para descargar el archivo
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contenido.txt'; // Nombre del archivo a descargar
      document.body.appendChild(a); // Necesario para Firefox
      a.click();
      document.body.removeChild(a); // Limpiar el DOM
      URL.revokeObjectURL(url);
    }
  }
}