import { Component, OnInit } from '@angular/core';
import { HttpModule } from "@angular/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  id="";
  password="";
  //constructor(private http:HttpClientModule) { }
  constructor() { }

  ngOnInit() { }
    
    onKey(value:string) {
    }
  
    submit() {
      alert(this.id);
    }

  /*
  const datas ="";

  this.HttpClientModule
  .request(
    "POST",
    baseurl,
    {
      responseType:"json",
      datas
    }
  )
  */
}
