import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http){ 
  }
  getData(){
    return this.http.get('http://172.16.11.152:8000/users');
  }

  

}
