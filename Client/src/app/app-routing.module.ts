import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './MyComponents/weather/weather.component';
import { NewsComponent } from './MyComponents/news/news.component';
import { ScoresComponent } from './MyComponents/scores/scores.component';
import { LoginComponent } from './MyComponents/Auth/login/login.component';
import { RegisterComponent } from './MyComponents/Auth/register/register.component';

const routes: Routes = [
  { path: '', component: NewsComponent},
  { path: 'weather', component: WeatherComponent},
  { path: 'scores', component: ScoresComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
