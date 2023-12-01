import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  loginUserForm = this.formBuilder.group({
    email:['', Validators.compose([Validators.email, Validators.required])],
    password:['', Validators.required]
  });

  constructor(
    private user_service:UsersService,
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginUserForm.invalid) return;

    const email = this.loginUserForm.get('email')?.value;
    const password = this.loginUserForm.get('password')?.value;

    if(this.user_service.login(email, password)) {
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }

  get email() {
    return this.loginUserForm.get('email');
  }

  get password() {
    return this.loginUserForm.get('password');
  }

  login_facebook() {

  }

  login_google() {

  }

  login_invitado() {

  }
}
