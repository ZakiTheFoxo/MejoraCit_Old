import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  auth: boolean = false;

  constructor(
    private auth_service: AuthService
  ) { }

  ngOnInit(): void {

  }
}
