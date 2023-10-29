import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
      console.log("abc");
      console.log(this.route);
      this.route.params.subscribe((param)=>{
        console.log(param["id"]);
      });

      this.route.queryParams.subscribe((param)=>{
        console.log(param["name"])
      })
  }
}
