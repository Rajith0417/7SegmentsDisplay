import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularDigitComponent } from './regular-digit.component';

describe('RegularDigitComponent', () => {
  let component: RegularDigitComponent;
  let fixture: ComponentFixture<RegularDigitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularDigitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
