import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Google New Blog';

  articles: Array<any>;

  constructor(private newService: NewsService) {}

  ngOnInit(){
    this.newService.getArticles().subscribe(data => {
      this.articles = data['articles'] });
  }
  searchArticle(source: string){
    this.newService.getArticleByID(source).subscribe(data => {
      this.articles = data['articles']
    });
  }

  }



