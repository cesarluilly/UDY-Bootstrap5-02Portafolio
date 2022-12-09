# [Liga de produccion del proyecto realizado](https://fluffy-swan-25cdda.netlify.app/)

# Alternativas de boostrap
* https://ng-bootstrap.github.io/#/components/alert/examples

# UDYBootstrapPortafolio
* Liga del curso https://www.udemy.com/course/curso-bootstrap/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Pasos del desarrollo del portafolio


## Paso para creal el Portafolio
> ### Video 65 - Encabezado
* Agrego las fuentes de Opens Sans de Ligh, regular, Bold (300, 400, 600, 700) al Index y en el css lo referencio.
![video65Fonts](./imgReadme/video65Fonts.png)

* Encabezado Original a diseñar
![video65EncabezadoOriginal](./imgReadme/video65EncabezadoOriginal.png)

* Creo la escructura del encabezado(Esqueleto) sin css
    * Ver commit https://github.com/cesarluilly/UDY-Bootstrap5-02Portafolio/commit/8c8c053f4ee55582b058af47dcbe3481df14d4fd

    * ![video65Esqueleto](./imgReadme/video65Esqueleto.png)

* Codigo terminado y presentacion del encabezado
    * **Desktop** ![video65PracticaCompletadaDesktop](./imgReadme/video65PracticaCompletadaDesktop.png)

    * **Mobile** ![video65PracticaCompletadaMobile](./imgReadme/video65PracticaCompletadaMobile.png)

> ### Video 66 - Slideshow
* Desarrollando el SlideShow y al estar utilizando las clases de bootstrap, automaticamente nuestro slideshow es
responsive 
    * **Desktop** ![video66SlideshowCompletadoDesktop](./imgReadme/video66SlideshowCompletadoDesktop.png)
    * **Mobile** ![video66SlideshowCompletadoMobile](./imgReadme/video66SlideshowCompletadoMobile.png)

> ### Video 67 - Galeria de trabajos (Parte I)
* Lo que se espera
    * ![video67LoQueSeEsperaHacer](./imgReadme/video67LoQueSeEsperaHacer.png)

> ### Video 68 - Galeria de trabajos (Parte II) - Diseño Responsive
* Presentacion
    * **Desktop**
    ![video68CompletadoDesktop](./imgReadme/video68CompletadoDesktop.png)

    * Mobile
    ![video68CompletadoMobile](./imgReadme/video68CompletadoMobile.png)

> Acomodar los medias Queries con los Breakpoint de bootstrap.
```css
/* MEDIAQUERIES */
/* Dispositivo sm */
@media screen and (max-width: 576px){}

/* Dispositivo md */
@media screen and (max-width: 760px) {}

/* Dispositivo lg */
@media screen and (max-width: 992px) {
    .logo {
        height: 76px;
    }

    header .menu {
        min-height: 76px;
    }

    header .menu a {
        width: 100px;
    }

    .portafolio .galeria .contenedor-imagen:nth-child(1) {order: 1;}
    .portafolio .galeria .contenedor-imagen:nth-child(2) {order: 3;}
    .portafolio .galeria .contenedor-imagen:nth-child(3) {order: 6;}
    .portafolio .galeria .contenedor-imagen:nth-child(4) {order: 2;}
    .portafolio .galeria .contenedor-imagen:nth-child(5) {order: 5;}
    .portafolio .galeria .contenedor-imagen:nth-child(6) {order: 4;}
    .portafolio .galeria .contenedor-imagen:nth-child(7) {order: 7;}
}

/* Dispositivo xl */
@media screen and (max-width: 1200px) {}

/* Dispositivo xxl */
@media screen and (max-width: 1400px) {}
```

> ### Video 69 - Galeria de trabajos (Parte III) - Codigo Javascript de la galeria

* **Nota** se recomienda utilizar en css para anchos el 
`max-width` en lugar del `width` ya que el `max-width` **es responsive**

* Presentacion de lo que se iso
    * **Desktop**
    ![video69CompletadoDesktop](./imgReadme/video69CompletadoDesktop.png)

    * **Mobile**
    ![video69CompletadoMobile](./imgReadme/video69CompletadoMobile.png)

> ### Video 70 - Seccion de acerca de
* Lo que se espera
![video70LoQueSeEspera](./imgReadme/video70LoQueSeEspera.png)

* Presentacion
    * **Desktop**
    ![video70PresentationDesktop](./imgReadme/video70PresentationDesktop.png)

    * **Mobile**
    ![video70PresentationMobile](./imgReadme/video70PresentationMobile.png)


> ### Video 71 - Formulario de contacto
* Lo que se espera
![video71Esperado](./imgReadme/video71Esperado.png)

* Presentacion de lo que si realizo
    * **Desktop**
    ![video71PresentacionDesktop](./imgReadme/video71PresentacionDesktop.png)

    * **Mobile**
    ![video71PresentacionMobile](./imgReadme/video71PresentacionMobile.png)


> ### Video 72 - Pie de pagina
* Presentacion realizada
    * **Desktop**
    ![video72PresentationDesktop](./imgReadme/video72PresentationDesktop.png)

    * **Mobile**
    ![video72PresentationMobile](./imgReadme/video72PresentationMobile.png)
