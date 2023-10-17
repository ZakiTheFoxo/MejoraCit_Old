import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reportar-nuevo-problema',
  templateUrl: './reportar-nuevo-problema.component.html',
  styleUrls: ['./reportar-nuevo-problema.component.css']
})
export class ReportarNuevoProblemaComponent {
  createReportForm = this.formBuilder.group({

  });

  constructor(
    private formBuilder: FormBuilder
    ) {

  }

  addReport() {
    if(this.createReportForm.invalid) { return; }

    // let name = this.createUserForm.get('name')?.value;
    // let email = this.createUserForm.get('email')?.value;

    // let newReport = {};

    // this.report_service.addReport(newReport);
  }
}
