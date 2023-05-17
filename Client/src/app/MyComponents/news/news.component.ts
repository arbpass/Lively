import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivelyService } from 'src/app/Shared/lively.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(public route: Router, public service: LivelyService) { }

  newsData: any;
  comment: string = "Failed to fetch NEWS :(";
  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem('_token'));
    if (!token) this.route.navigateByUrl('/login');
    else {
      this.service.loggedIn = true;
      this.service.getHome();

      fetch(`https://newsdata.io/api/1/news?apikey=pub_162654721a6ef5e3ebc142b6ae0ac0f6ef75f&language=fr,en`)
        .then(response => response.json())
        .then(data => {
          this.newsData = data;
          console.log(this.service.newsFav);
        })
    }

  }




}
