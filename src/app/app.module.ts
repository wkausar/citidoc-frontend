import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentGeneratorComponent } from './components/document-generator/document-generator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DocumentSearchComponent } from './components/document-search/document-search.component';
import { DocumentListComponent } from './components/document-list/document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentGeneratorComponent,
    NavbarComponent,
    DocumentSearchComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
