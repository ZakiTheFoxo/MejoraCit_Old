import { Injectable } from '@angular/core';
import { Users, users } from '../users';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
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
  private isLogged:boolean = false;

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
      localStorage.setItem('isLogged', this.isLogged ? "true" : "false");

      if(user.admin) {
        localStorage.setItem('admin', "true");
      }
      
      return true;
    }
    return false;
  }

  isLoggedIn():boolean {
    return localStorage.getItem('isLogged') == "true" ? true : false;
  }

  isAdmin():boolean {
    return localStorage.getItem('user') == "admin" ? true : false;
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('user');
    localStorage.removeItem('isLogged');
  }

  addUser(user: any): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }
}
