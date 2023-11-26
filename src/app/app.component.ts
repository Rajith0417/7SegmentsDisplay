import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegularNumberComponent } from './regular-number/regular-number.component';
import { SevenSegmentNumberComponent } from './seven-segment-number/seven-segment-number.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegularNumberComponent, SevenSegmentNumberComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '7SegmentsDisplay';

  typedValue = new FormControl<number>(0);

}
