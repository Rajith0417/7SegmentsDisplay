import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegularNumberComponent } from './regular-number/regular-number.component';
import { SevenSegmentNumberComponent } from './seven-segment-number/seven-segment-number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegularNumberComponent, SevenSegmentNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '7SegmentsDisplay';
}
