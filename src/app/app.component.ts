import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

sendOddNumbers = [];
sendEvenNumbers = [];

onNumberReceived(receivedNumber:number) {
  
  return receivedNumber % 2 === 1 ? this.sendOddNumbers.push(receivedNumber) : this.sendEvenNumbers.push(receivedNumber);

}
}