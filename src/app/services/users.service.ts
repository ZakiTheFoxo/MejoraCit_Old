import { Injectable } from '@angular/core';
import { Users, users } from '../users';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // /* This will be the final code */
  // url:string = "";

  // constructor(private http: HttpClient) { }

  // getAllUsers():Observable<Users[]>{
  //   return this.http.get<Users[]>(this.url);
  // }

  // getUser(id:number):Observable<Users>{
  //   const url = this.url+"/"+id;
  //   return this.http.get<Users>(url);
  // }

  // addUser(user: any): void {
  // // user.id = this.users.length + 1
  //   this.http.post(this.url, user);
  // }

  private users:Users[] = users;

  constructor( ) { }

  getAllUsers():Observable<any>{
    return of(this.users);
  }

  getUser(email:string, password:string):Observable<any> {
    return of(this.users[0]);
  }

  login(email:any, password:any):boolean {
    let user = this.users.find(user => user.email == email && user.password == password);
    if(user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
}

  addUser(user: any): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
}
