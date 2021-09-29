import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  n: number = 0;

  @Output() gameStartEvent = new EventEmitter<number>();

  shooting: any;

  onStartClicked() {

    this.shooting = setInterval(_ => {

      this.n++
      this.gameStartEvent.emit(this.n)

    }, 800)

  }

  onStopClicked() {

    clearInterval(this.shooting)

  }

  constructor() {}

  ngOnInit(): void {}

}