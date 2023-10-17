import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarNuevoProblemaComponent } from './reportar-nuevo-problema.component';

describe('ReportarNuevoProblemaComponent', () => {
  let component: ReportarNuevoProblemaComponent;
  let fixture: ComponentFixture<ReportarNuevoProblemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportarNuevoProblemaComponent]
    });
    fixture = TestBed.createComponent(ReportarNuevoProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
