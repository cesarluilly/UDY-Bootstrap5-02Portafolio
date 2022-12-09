import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UDY-BootstrapPortafolio';

  // constructor(){
  //   console.log('Hola mundo constructor');    

  //   //  CODIGO DEL CURSO DE UDEMY
  //   // const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
  //   // const imagenModal = document.getElementById('imagen-modal') as HTMLImageElement;


  //   // imagenes.forEach((img) => {
  //   //   img.addEventListener('click', () => {
  //   //     const ruta:string = img.querySelector('img')?.src || "";
  //   //     imagenModal.src = ruta;
  //   //   })
  //   // });
  // }

  public cambiarSrc(ruta:string) : void {
    const imagenModal = document.getElementById('imagen-modal') as HTMLImageElement;
    imagenModal.src = ruta;
  }
}
