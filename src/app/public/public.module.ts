import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { PublicRoutingModule } from './public-routing.module';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule
  ]
})
export class PublicModule { }
