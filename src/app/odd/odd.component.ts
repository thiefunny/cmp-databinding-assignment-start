import {
  Component,
  DoCheck,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, DoCheck {

  @Input() oddNumber: number;

  oddNumbers = [];

  ngDoCheck() {
    // console.log(this.oddNumber);
    console.log(this.oddNumbers);
    if (this.oddNumber % 2 === 0) {
      this.oddNumbers.push(this.oddNumber)
    };
  }

  constructor() {

  }

  ngOnInit(): void {}

}
