import { PipeTransform,Pipe } from "@angular/core";
import { News } from "./models/news";
import { NewsService } from "./services/news.service";

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    constructor(private newsService:NewsService){

    }
    transform(news: News[], searchText:string) {
         this.newsService.sendMsg(1); //to set current page number for pagination pipe
        if(!news|| ! searchText)
        return news;
     return news.filter(n=>n.title.toLowerCase().startsWith(searchText.toLowerCase()))
    }

}