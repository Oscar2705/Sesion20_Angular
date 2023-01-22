import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) {
    this.getMostrarData()
   }

  getMostrarData(){
    return this.http.get<any>(this.url)
  }
}
