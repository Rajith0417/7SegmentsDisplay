import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSegmentDigitComponent } from './seven-segment-digit.component';

describe('SevenSegmentDigitComponent', () => {
  let component: SevenSegmentDigitComponent;
  let fixture: ComponentFixture<SevenSegmentDigitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevenSegmentDigitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevenSegmentDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
