import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivelyService } from 'src/app/Shared/lively.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, public service: LivelyService, private router: Router) {  }

  ngOnInit(): void {
    this.register();

    // let token = JSON.parse(localStorage.getItem('_token'));
    // if(token) this.router.navigateByUrl('/');
  }

  registerForm: FormGroup;

  register()
  {
    this.registerForm = this.fb.group({
      Username : ['', Validators.required],
      Email : ['', Validators.required],
      Phone : ['', Validators.required],
      Password : ['', Validators.required],
    })
  }

  onSubmit()
  {
    this.service.postRegisterUser(this.registerForm.value).subscribe(
      res=> {
        console.log(res);
        this.router.navigateByUrl("/login");
      },
      err=> {
        console.log(err);
      }
    )
  }
}
