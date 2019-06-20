import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgIdleModule } from '@ng-idle/core';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';
import { SessionTimeoutWarningComponent } from './core/session-timeout/session-timeout-warning.component';
@NgModule({
  declarations: [
    AppComponent,
    SessionTimeoutWarningComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UserIdleModule.forRoot({ idle: 3, timeout: 120, ping: null })
  ], entryComponents: [
    SessionTimeoutWarningComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
