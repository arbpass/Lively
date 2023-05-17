import { Component, OnInit } from '@angular/core';
import { LivelyService } from './Shared/lively.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public service: LivelyService, private router: Router) { }

  title = 'lively';
  showOptions = false;
  weatherDataNav: any = [];
  ngOnInit(): void {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=e8e8e9917d22858d7043b5a152971460&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.weatherDataNav= data;
      })

  }

  toggleOptions()
  {
    if(this.showOptions) this.showOptions=false;
    else this.showOptions=true;
  }


  onLogout()
  {
    localStorage.clear();
    this.service.loggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
