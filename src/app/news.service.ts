import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apikey = '0dfe1a9a17864a019d55d139be898ae4';

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=` + this.apikey);
  }

  getArticleByID(source: string){
    return this.http.get('http://newsapi.org/v2/top-headlines?sources' + '&apikey=' + this.apikey);
  }

}
