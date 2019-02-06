import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  //[x: string]: any;

email:String;
clave:String;

  //constructor(private http:Http) {
  constructor() {

   }

  ngOnInit() {
  }

/*    verificarLogin(email:String, clave:String) {
     const l={'correo':this.email,'clave':this.clave};
       this.http.post('http://172.16.11.152:8000/users',JSON.stringify(l))
       .toPromise()
       .then(response=>{
   console.log("email");

    });
   } */ 
}