import { createFeatureSelector, createSelector } from "@ngrx/store";
import {  IStore } from "../models/IStore";


export const selectNews=createSelector((state:IStore)=>state.news,(news)=>news)

