import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './MyComponents/weather/weather.component';
import { NewsComponent } from './MyComponents/news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoresComponent } from './MyComponents/scores/scores.component';
import { LoginComponent } from './MyComponents/Auth/login/login.component';
import { RegisterComponent } from './MyComponents/Auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NewsComponent,
    ScoresComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
