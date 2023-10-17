import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarFinalComponent } from './reportar-final.component';

describe('ReportarFinalComponent', () => {
  let component: ReportarFinalComponent;
  let fixture: ComponentFixture<ReportarFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportarFinalComponent]
    });
    fixture = TestBed.createComponent(ReportarFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
