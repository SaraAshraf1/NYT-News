
import { createReducer, on } from '@ngrx/store';
import { NewsInfo } from 'src/app/models/news';
import {  success } from '../actions/news.action';

 
export const initialState:NewsInfo= {
    status:'',
    copyright: '',
    section: '',
    last_updated: new Date(),
    num_results: 0,
    results: [],
};
 
export const newsReducer = createReducer(
  initialState,
  on(success, (state,  newsInfo ) => newsInfo),


);
 
