import { createAction, props } from "@ngrx/store";
import { NewsInfo } from "src/app/models/news";

export const success:any = createAction("[News] Success", props<{ newsInfo: NewsInfo }>())
export const load:any = createAction("[News] Load",props<{ section: string }>())


