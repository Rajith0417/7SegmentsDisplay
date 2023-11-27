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
  digitsCount: number = 1;
  segmentArr: number[] = [];

  @Input() set number(value: number){

    this._number.set(value);
    this.digitsCount = this.findDigits(value);
    this.modifyArray(this.digitsCount);
  }
  //get number of each digit
  getDigit = (pow: number) => {
    return Math.floor(this._number()/Math.pow(10, pow)%10);
  }

  //get number of digits of a number
  findDigits(number: number) {
    // Convert the number to a string
    let numberString = Math.abs(number).toString();
    return numberString.length;
  }

  modifyArray(value: number){

    if (this.segmentArr.length > value) {
      // Keep the last items and remove the rest
      this.segmentArr = this.segmentArr.slice(-value);
    }

    for (let index = 0; index < value; index++) {
      this.segmentArr[index] = computed(()=>{return this.getDigit(index)})();
    }
    this.segmentArr.reverse();
  }

  // first = computed(()=>{return this.getDigit(0)});
  // second = computed(()=>{return this.getDigit(1)});
  // third = computed(()=>{return this.getDigit(2)});
  // forth = computed(()=>{return this.getDigit(3)});

}
