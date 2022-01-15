import { createAction, props } from "@ngrx/store";
import { NewsInfo } from "src/app/models/news";

export const setLoadingSpinner:any = createAction("[shared] Success", props<{ showLoading: boolean }>())
export const failed:any = createAction("[shared] Failed", props<{ err: string }>())



