import { Component } from '@angular/core';
import { reportes } from '../reportes';

@Component({
  selector: 'app-reportar-problema',
  templateUrl: './reportar-problema.component.html',
  styleUrls: ['./reportar-problema.component.css']
})
export class ReportarProblemaComponent {
  reportes = reportes;
}
