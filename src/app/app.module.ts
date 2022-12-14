import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortafolioModule } from './portafolio/portafolio.module';
import { PracticandoComponent } from './practicando/practicando.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticandoComponent
  ],
  imports: [
    BrowserModule,
    PortafolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
