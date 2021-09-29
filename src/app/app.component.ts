import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

sendToChildren: number;

onNumberReceived(nextNumber:number) {
  
  return this.sendToChildren = nextNumber;
  
}
}