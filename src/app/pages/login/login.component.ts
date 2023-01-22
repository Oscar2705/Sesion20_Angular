import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:string="Oscar";
  contra:string="12345";

  username!:string;
  pass!:string;
  token="true"
  constructor(private route:Router){

  }
  ngOnInit(): void {
    
  }

  validar(){
    if(this.username == this.user && this.pass == this.contra){
      localStorage.setItem('logeado',this.token);
      this.route.navigate(['login']);
      alert("Datos ingresados correctos")
    }
    else{
      alert( "Dato incorrecto")
    }
  }

}
