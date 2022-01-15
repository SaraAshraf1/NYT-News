import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, empty, Observable, of } from 'rxjs';
import { IStore } from '../models/IStore';
import {  News, NewsInfo } from '../models/news';
import { NewsService } from '../services/news.service';
import { load } from '../store/actions/news.action';
import { selectNews } from '../store/news.selector';
import { selectErrorMsg, selectLoadingSpinner } from '../store/shared.selector';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  host: {
    class:'full-width'
}
})
export class NewsComponent implements OnInit {
  searchText:string;
  errMsg:Observable<string>;
  showSpinner:Observable<boolean>;
  currentSection:string;
  sectionNews: News[];
  currentPageNumber:number=1
  constructor(private store: Store<IStore>,private newsService:NewsService,private activatedRoute:ActivatedRoute) {
  store.select(selectNews).subscribe((data)=>
  {
  this.sectionNews=data.results;
  this.errMsg=EMPTY;
  });
  this.errMsg=store.select(selectErrorMsg);
  this.showSpinner=store.select(selectLoadingSpinner);
  }

  ngOnInit(): void {
 this.newsService.getMsg().subscribe((page)=>this.currentPageNumber=page)   //to set current page number for pagination pipe
 this.activatedRoute.params.subscribe(s=>{
  this.currentSection=s.section
   this.store.dispatch( load({section: this.currentSection}))
 }
   )
   
  }

}
