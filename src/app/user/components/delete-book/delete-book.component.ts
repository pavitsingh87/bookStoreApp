import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.parent?.params.subscribe((param)=>{
        console.log(param['userId']);
    });
  }


}
