
import { createReducer, on } from '@ngrx/store';
import { sharedState } from 'src/app/models/sharedState';
import { failed, setLoadingSpinner } from '../actions/shared.action';

 
export const initialState:sharedState= {
showLoading:true,
errMsg:''
};
 
export const sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state,  action ) =>  {
    return {...state,
      showLoading: action.status}
  }),
  on(failed, (state,  err ) => {
 
    return {...state,
      errMsg: err.errMsg}
  }),

);
 
