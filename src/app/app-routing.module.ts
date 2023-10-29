import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './public/components/home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';


const routes:Routes = [
  {path:'', pathMatch:'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'how-it-works', component: HowItWorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
