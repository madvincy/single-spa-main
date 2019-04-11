import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { PocHttpInteceptor } from '../utils/poc-http-interceptor';
import { AmrsAuthService } from '../amrs-auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AmrsAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PocHttpInteceptor,
      multi: true
    },
  ],
})
export class NgxAmrsAuthModuleModule { }
