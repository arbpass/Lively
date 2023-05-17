import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivelyService } from 'src/app/Shared/lively.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit{
  constructor(private router: Router, public service: LivelyService) { }
  cricketData: any;
  matchName: string = "All the scores of current Cricket Matches";
  score1: string = "";
  score2: string = "";
  status: string = "";

  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem('_token'));
    if(!token) this.router.navigateByUrl('/login');
    else
    {
      fetch(`https://api.cricapi.com/v1/currentMatches?apikey=2dbdb649-7831-4632-ad4e-ef13b8edfb30&offset=0`)
      .then(response => response.json())
      .then(data => {
        this.cricketData = data;
        this.service.loggedIn=true;
        console.log(this.cricketData);
      })
    }

  }


  hoverDetails(data: any)
  {
    // console.log(data);
    this.matchName = data.name;
    // this.score1 = "Inning: "+data.score[0]['inning']+", Run: "+data.score[0]['r']+", Wicket: "+data.score[0]['w']+", Over: "+data.score[0]['o'];
    // this.score2 = "Inning: "+data.score[1]['inning']+", Run: "+data.score[1]['r']+", Wicket: "+data.score[1]['w']+", Over: "+data.score[1]['o'];

    this.status = data.status;
  }

  default()
  {
    this.matchName = "All the scores of current Cricket Matches";
  }
}
