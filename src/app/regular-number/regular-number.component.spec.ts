import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNumberComponent } from './regular-number.component';

describe('RegularNumberComponent', () => {
  let component: RegularNumberComponent;
  let fixture: ComponentFixture<RegularNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
