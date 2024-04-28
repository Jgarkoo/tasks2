import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent {
  name: string = 'kebaba';
  email: string = 'analsiti@gmail.com';
  age: number = 69;
   
}
