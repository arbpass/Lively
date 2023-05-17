import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LivelyService } from 'src/app/Shared/lively.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private fb: FormBuilder, public service: LivelyService, private router: Router) { }

  ngOnInit(): void {
    this.login();

    // let token = JSON.parse(localStorage.getItem('_token'));
    // if(token) this.router.navigateByUrl('/');
  }

  loginForm: FormGroup;

  login() {
    this.loginForm = this.fb.group({
      Username: [''],
      Password: [''],
    })
  }

  onSubmit() {
    this.service.postLoginUser(this.loginForm.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('_token', JSON.stringify(res));
        this.service.loggedIn=true;
        this.router.navigateByUrl('/');
      },
      err => {
        console.log(err);
      }
    )
  }
}
