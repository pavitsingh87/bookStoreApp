import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  authorId=100;
  bookId=20;
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(){
    this.route.firstChild?.params.subscribe((param)=>{
      console.log(param["id"]);
    })
  }
}
