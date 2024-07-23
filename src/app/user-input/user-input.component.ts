import { Component, EventEmitter, Input, output, Output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';



@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private service:InvestmentService ){}
  initial=signal('0');
  annual=signal('0');
  return=signal('0');
  duration=signal('0');

onSubmit(){
  this.service.calculateInvestmentResults({
    initialInvestment:+this.initial(),
    annualInvestment:+this.annual(),
    expectedReturn:+this.return(),
    duration:+this.duration(),
  });
  this.initial.set('0');
  this.annual.set('0');
  this.return.set('5');
  this.duration.set('2');
  
}

}
