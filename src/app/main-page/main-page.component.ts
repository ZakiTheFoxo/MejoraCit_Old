import { Component, OnInit } from '@angular/core';

import { reportes } from '../reportes';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  reportes = reportes;

  constructor() { }

  ngOnInit(): void {
  }

}
