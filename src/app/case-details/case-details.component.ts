import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reportes } from '../reportes';
import { CasesService } from '../services/cases.service';

@Component({
  selector: 'app-casea-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {

  reporte: Reportes | undefined;

  constructor(
    private casesService: CasesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.casesService.getCase(Number(id)).subscribe((cases: Reportes)=>{
      this.reporte = cases;
    })
  }

}
