import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportar-final',
  templateUrl: './reportar-final.component.html',
  styleUrls: ['./reportar-final.component.css']
})
export class ReportarFinalComponent {

  constructor(private router:Router) { }


  menu() {
    this.router.navigate(['/home']);
  }
}
