import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){}
  getData(){
    return this.http.get('https://demo.evona.ba:3100/banners/0??TerminalId=2222',{
      headers: new HttpHeaders({'terminalId': '2222'})
    })
  }
}