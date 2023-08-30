import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reportes, reportes } from '../reportes';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {

  reporte: Reportes | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the report id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const reporteIdFromRoute = Number(routeParams.get('id'));

    // Find the report that correspond with the id provided in route.
    this.reporte = reportes.find(reporte => reporte.id === reporteIdFromRoute);
  }

}
