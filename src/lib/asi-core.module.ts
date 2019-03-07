import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppConstantService } from './index';
import { AuthorizationInterceptor } from './authorization-interceptor';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [
      AppConstantService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthorizationInterceptor,
          multi: true,
      },
    ],
    exports:[]
  })
  export class AsiCoreModule { }