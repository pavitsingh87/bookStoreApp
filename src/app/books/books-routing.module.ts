import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


const routes:Routes = [
  {
    path:'books',  component: BooksComponent ,
    children:
    [
      { path: 'all-books', component: AllBooksComponent },
      {path:'book-details/:id', component:BookDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
