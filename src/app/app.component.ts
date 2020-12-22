import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles: Array<any>;
  mSource: Array<any>;

  constructor(private newsApi: NewsApiService) {
    console.log('app constructor was called');
   }
  ngOnInit() {
    //load articles in our app
    this.newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //loed news source in our app
    this.newsApi.initSource().subscribe(data => this.mSource = data['source']);
  }

  serachArticlesById(source: string) {
    this.newsApi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
  }
}
