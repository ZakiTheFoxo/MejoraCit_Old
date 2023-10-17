import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reportes, reportes } from '../reportes';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  private cases: Reportes[] = reportes;

  constructor() { }

  getAllCases(): Observable<any> {
    return of (this.cases);
  }

  getCase(id:number):Observable<any>{
    return of (this.cases.find(cases => cases.id === id));
  }
}
