import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivelyService {

  constructor(private http: HttpClient, private router: Router) { }
  readonly baseUrl = 'https://localhost:5000';
  loggedIn: boolean = false;
  newsFav: any;


  //Methods
  postRegisterUser(data: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + "/register", data);
  }

  postLoginUser(data: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + "/login", data);
  }


  getHome() {
    let ls = localStorage.getItem('_token');
    let token = JSON.parse(ls).token;

    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });

    return this.http.get(this.baseUrl + "/Home", { headers: header }).subscribe(
      res => {
        // console.log(res);
        this.newsFav = res;
        this.loggedIn=true;
      },
      err => {
        console.log(err);
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }
    );
  }


  saveNews(data: any)
  {
    let ls = localStorage.getItem('_token');
    let token = JSON.parse(ls).token;

    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });

    return this.http.post(this.baseUrl + "/Home", data, { headers: header }).subscribe(
      res => {
        // console.log(res);
        this.getHome();
      },
      err => {
        console.log(err);
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }
    );
  }


  deleteNews(title: string)
  {
    let ls = localStorage.getItem('_token');
    let token = JSON.parse(ls).token;

    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });

    return this.http.delete(this.baseUrl + "/Home/" + title, { headers: header }).subscribe(
      res => {
        // console.log(res);
        this.getHome();
      },
      err => {
        console.log(err);
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }
    );
  }
}
