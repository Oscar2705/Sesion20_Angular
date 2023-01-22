import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  CODIGO!:String;
  ID!:String;
  NAME!:String;
  USERNAME!:string;
  EMAIL!:string;

  titulo!:string;
  arrayusers:any = [];

  constructor(private Informacion:ApiService){}
  ngOnInit(): void {
    
  }
  getmostrar(){
    this.CODIGO="Codigo";
    this.ID="ID"
    this.NAME="Name"
    this.USERNAME="Username"
    this.EMAIL="Email"
 

    this.Informacion.getMostrarData().subscribe(
      resultado => {
        console.log(resultado)
        this.arrayusers = resultado
      }, err =>{
        console.log('error')
      });

  }
}
