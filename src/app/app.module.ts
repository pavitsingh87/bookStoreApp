import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
