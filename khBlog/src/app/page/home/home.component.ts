import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public articleList: Array<any> = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`http://localhost:8090/index/article`)
      .subscribe((data: any) => {
        debugger;
        this.articleList = data.data;
      });
  }
}
