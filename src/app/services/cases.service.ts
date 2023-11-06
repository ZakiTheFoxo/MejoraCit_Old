import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reportes, reportes } from '../reportes';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  // /* This will be the final code */
  // url:string = "";

  // constructor(private http: HttpClient) { }

  // getAllCases():Observable<Reportes[]>{
  //   return this.http.get<Reportes[]>(this.url);
  // }

  // getCase(id:number):Observable<Reportes>{
  //   const url = this.url+"/"+id;
  //   return this.http.get<Reportes>(url);
  // }

  // addCase(case: any): void {
  // //   case.id = this.users.length + 1
  //   this.http.post(this.url, case);
  // }

  private cases: Reportes[] = reportes;

  constructor() { }

  getAllCases(): Observable<any> {
    return of (this.cases);
  }

  getCase(id:number):Observable<any>{
    return of (this.cases.find(cases => cases.id === id));
  }

  addCase(report: any): void {
    report.id = this.cases.length + 1;
    this.cases.push(report);
  }
}
