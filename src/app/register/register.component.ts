import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombre: string = "";
  email: string = "";
  cel: string = "";
  password: string = "";
  password2: string = "";
  check: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  register() {

  }
}
