import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  public cambiarSrc(ruta:string) : void {
    const imagenModal = document.getElementById('imagen-modal') as HTMLImageElement;
    imagenModal.src = ruta;
  }
  
  ngOnInit(): void {
  }

}
