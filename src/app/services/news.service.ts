import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NewsInfo } from "../models/news";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class NewsService {
    apiURL: string="";
    subject=new BehaviorSubject<number>(0);
    constructor (private http: HttpClient) {}
  
    loadNews(section:string): Observable<NewsInfo> {
        this.apiURL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=315a5a51483b469a918246dc2753b339`;
    
        return this.http.get<NewsInfo>(this.apiURL);
          
      }
      /*handleError(err:any) {  //we handeled error in effect instead
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // back-end returned an unsuccessful response code & response body may contain what went wrong.
          errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }*/
     

  sendMsg(p:number){
this.subject.next(p);
  }
  getMsg(){
return this.subject.asObservable();
  }
  }