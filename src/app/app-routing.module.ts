import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentGeneratorComponent } from './document-generator/document-generator.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'document-generator', component: DocumentGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
