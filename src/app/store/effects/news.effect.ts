import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap,switchMap } from "rxjs/operators";
import { IStore } from "src/app/models/IStore";
import { NewsInfo } from "src/app/models/news";
import { NewsService } from "src/app/services/news.service";
import {  load, success } from "../actions/news.action";
import { failed, setLoadingSpinner } from "../actions/shared.action";

@Injectable()
export class NewsEffects {
constructor(private actions$: Actions,private store: Store<IStore>,
    private newsService: NewsService) { }

loadNews$ = createEffect(() => this.actions$.pipe(
    ofType(load),
    mergeMap((payload) => this.newsService.loadNews(payload.section)
      .pipe(
        map((newsInfo: NewsInfo) => {
         this.store.dispatch(setLoadingSpinner({status:false}))
         return success(newsInfo)
        } ),
        catchError((err) => {
          console.log(err)
          this.store.dispatch(setLoadingSpinner({status:false}))
          return of(( failed({errMsg: err.statusText})))
        })
      ))
    )
  );
      }