import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
apiDataInfo: any;
posts:Array<any> = [];
  constructor(private http: HttpClient, private apiData: ApiService){}

  ngOnInit(){
    this.apiData.getData().subscribe(apiData => {
      //this.posts = [...apiData.Result];
      this.apiDataInfo = apiData; 
      //console.log(this.posts);
      console.log(this.apiDataInfo.Result);
      this.posts = this.apiDataInfo.Result.slice();
    },
    (err: HttpErrorResponse) =>{
      console.log(err.error);
      console.log(err.name);
      console.log(err.message);
      console.log(err.status);
    })
  }

  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "autoplay": true,
    "dots":true,
    "infinite": true
  };

}




