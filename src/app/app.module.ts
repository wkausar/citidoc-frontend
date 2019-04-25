import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastNotificationModule } from 'patternfly-ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DocumentGeneratorComponent } from './document-generator/document-generator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentGeneratorComponent,
    NavbarComponent,
    SearchFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
