import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarProblemaComponent } from './reportar-problema.component';

describe('ReportarProblemaComponent', () => {
  let component: ReportarProblemaComponent;
  let fixture: ComponentFixture<ReportarProblemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportarProblemaComponent]
    });
    fixture = TestBed.createComponent(ReportarProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
