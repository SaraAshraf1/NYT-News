import { newsReducer } from "../store/reducers/news.reducer";
import { sharedReducer } from "../store/reducers/shared.reducer";
import { SectionsState } from "./ISections";
import { NewsInfo } from "./news";
import { sharedState } from "./sharedState";

export interface IStore
{
     news: NewsInfo,
     shared:sharedState
     
}
export const AppReducer={
     news:newsReducer,
        shared:sharedReducer
}