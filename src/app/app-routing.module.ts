import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './public_components/about/about.component';
import { HomeComponent } from './public_components/home/home.component';
import { HowItWorksComponent } from './public_components/how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './books/books.component';


const routes:Routes = [
  {path:'', pathMatch:'full', redirectTo:'about'},
  { path: 'about', component: AboutComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { 
    path: 'auth', 
    component: AuthComponent, 
    loadChildren:()=> import('./auth/auth.module').then((x)=>x.AuthModule) 
  },
  { 
    path: 'books', 
    component: BooksComponent, 
    loadChildren:()=> import('./books/books.module').then((x)=>x.BooksModule) 
  }
  ,
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
