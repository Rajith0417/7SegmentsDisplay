import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SevenSegmentDigitComponent } from '../seven-segment-digit/seven-segment-digit.component';

@Component({
  selector: 'app-seven-segment-number',
  standalone: true,
  imports: [CommonModule, SevenSegmentDigitComponent],
  templateUrl: './seven-segment-number.component.html',
  styleUrl: './seven-segment-number.component.scss'
})
export class SevenSegmentNumberComponent {

  _number = signal<number>(0);

  @Input() set number(value: number){
    console.log(value);
    this._number.set(value);
  }

  getDigit = (pow:number) => {
    return Math.floor(this._number()/Math.pow(10, pow)%10);
  }

  first = computed(()=>{return this.getDigit(0)});
  second = computed(()=>{return this.getDigit(1)});
  third = computed(()=>{return this.getDigit(2)});
  forth = computed(()=>{return this.getDigit(3)});

}
