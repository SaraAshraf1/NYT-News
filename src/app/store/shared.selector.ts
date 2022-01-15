import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sharedState } from "../models/sharedState";


export const selectSharedtate = createFeatureSelector<sharedState>("shared");
export const selectLoadingSpinner=createSelector(selectSharedtate,(state)=>state.showLoading)
export const selectErrorMsg=createSelector(selectSharedtate,(state)=>state.errMsg)