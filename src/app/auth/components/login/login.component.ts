import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string="";
  userId:string="";
  constructor(private route: ActivatedRoute, private router: Router){

  }
  ngOnInit(){
    this.route.queryParams.subscribe((param)=>{
      this.name=param["name"];
      this.userId=param["userId"];
    })
  }
  goToSignUp()
  {
    //this.router.navigateByUrl("/auth/signup");
    this.router.navigate(["/public/book-details", 100]);
  }
}
