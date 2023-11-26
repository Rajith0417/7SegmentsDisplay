import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-digit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-digit.component.html',
  styleUrl: './regular-digit.component.scss'
})
export class RegularDigitComponent {

  _digit = signal<number>(0);

  @Input() set digit(value: number){
    this._digit.set(value);
  };

}
