import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
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
