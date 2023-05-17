import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivelyService } from 'src/app/Shared/lively.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private router: Router, public service: LivelyService) { }

  weatherData: any = [];
  city: string = "Jaipur";
  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem('_token'));
    if (!token) this.router.navigateByUrl('/login');
    else {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=e8e8e9917d22858d7043b5a152971460&units=metric`)
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          this.service.loggedIn=true;
          this.weatherData = data;
        })
    }

  }


  onChangeCity(city: string) {
    // console.log("chnged "+city);
    this.ngOnInit();
  }
}
