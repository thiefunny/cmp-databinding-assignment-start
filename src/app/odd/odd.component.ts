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
export class OddComponent implements OnInit {

  @Input() oddNumbers: number;
  // @Input() number:

  constructor() {

  }

  ngOnInit(): void {}

}
