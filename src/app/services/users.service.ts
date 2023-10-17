import { Injectable } from '@angular/core';
import { Users, users } from '../users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users:Users[] = users;

  constructor( ) { }

  getAllUsers():Observable<any>{
    return of(this.users);
  }

  getUser() {

  }

  addUser(user: any): void {
    user.id = this.users.length + 1
    this.users.push(user);
  }
}
