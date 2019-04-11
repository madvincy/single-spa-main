import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAmrsAuthModuleModule } from './ngx-amrs-auth-module/ngx-amrs-auth-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAmrsAuthModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
