import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users:any;

  registerUserForm = this.formBuilder.group({
    nombre:['', Validators.required],
    email:['', Validators.email],
    telefono:['', Validators.compose([Validators.minLength(10), Validators.maxLength(10)])],
    password:['', Validators.required],
    password2:['', Validators.required],
    check:['', Validators.requiredTrue]
  });

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  addUser() {
    if(this.registerUserForm.invalid) console.log("error");

    if(this.registerUserForm.invalid) return;

    let nombre = this.registerUserForm.get('nombre')?.value;
    let email = this.registerUserForm.get('email')?.value;
    let telefono = this.registerUserForm.get('telefono')?.value;
    let password = this.registerUserForm.get('password')?.value;

    let newUser = {nombre, email, telefono, password};

    this.usersService.addUser(newUser);
  }
}
