import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';

@Component({
  selector: 'chess-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  readonly boardBuilderIterable = Array(8).fill(0).map((_, i) => i);

  private _side = 0;

  ngOnInit() {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(100),
        startWith(undefined as unknown as Event),
      )
      .subscribe(() => this.setSide());
  }

  get side(): number {
    return this._side;
  }

  private setSide() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const totalSide = width > height ? height : width;

    this._side = totalSide - (totalSide < 768 ? 40 : 80);
  }
}
