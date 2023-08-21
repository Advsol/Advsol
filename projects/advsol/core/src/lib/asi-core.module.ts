import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AsiCoreComponent } from './asi-core.component';
import { AuthorizationInterceptor } from './authorization-interceptor'
import { AppConstantService } from './app-constants.service';


@NgModule({
  declarations: [
    AsiCoreComponent
  ],
  imports: [HttpClientModule],
  providers: [
    AppConstantService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true
    },
  ],
  exports: [
    AsiCoreComponent
  ]
})
export class AsiCoreModule { }
