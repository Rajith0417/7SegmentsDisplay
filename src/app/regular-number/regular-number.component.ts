import { Component, signal, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularDigitComponent } from '../regular-digit/regular-digit.component';
import { first } from 'rxjs';

@Component({
  selector: 'app-regular-number',
  standalone: true,
  imports: [CommonModule, RegularDigitComponent],
  templateUrl: './regular-number.component.html',
  styleUrl: './regular-number.component.scss'
})
export class RegularNumberComponent {

  _number = signal<number>(0);

  @Input() set number(value: number){
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
