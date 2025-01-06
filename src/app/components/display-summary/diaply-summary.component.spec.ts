import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaplySummaryComponent } from './diaply-summary.component';

describe('DiaplySummaryComponent', () => {
  let component: DiaplySummaryComponent;
  let fixture: ComponentFixture<DiaplySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaplySummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaplySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
