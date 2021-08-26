import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Piece, PieceColors } from '../models/piece.model';
import { getInitialBoardPosition } from '../utils/board';
import { getSquareIndex } from '../utils/square';
import { getAvailableMoves } from '../utils/moves';
import { getPieceColor } from '../utils/piece';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  private _activeColor$ = new BehaviorSubject<PieceColors>(PieceColors.White);
  private _boardPosition$ = new BehaviorSubject<Map<number, Piece>>(getInitialBoardPosition());
  private _selectedSquare$ = new BehaviorSubject<[number, number] | null>(null);
  private _availableMoves$ = new BehaviorSubject<number[]>([]);

  get activeColor$(): Observable<PieceColors> {
    return this._activeColor$.asObservable();
  }

  get boardPosition$(): Observable<Map<number, Piece>> {
    return this._boardPosition$.asObservable();
  }

  get selectedSquare$(): Observable<[number, number] | null> {
    return this._selectedSquare$.asObservable();
  }

  get availableMoves$(): Observable<number[]> {
    return this._availableMoves$.asObservable();
  }

  selectSquare(rankAndFile: [number, number]) {
    const index = getSquareIndex(...rankAndFile);

    if (this._availableMoves$.value.includes(index) && !!this._selectedSquare$.value) {
      this.makeMove(this._selectedSquare$.value, rankAndFile);
    } else {
      const piece = this._boardPosition$.value.get(index);
      const isSameColor = !!piece && getPieceColor(piece) === this._activeColor$.value;

      this._selectedSquare$.next(!!piece && isSameColor ? rankAndFile : null);
      this._availableMoves$
        .next(!!piece && isSameColor ? getAvailableMoves(this._boardPosition$.value, rankAndFile) : []);
    }
  }

  makeMove(from: [number, number], to: [number, number]) {
    const position = this._boardPosition$.value;

    const piece = position.get(getSquareIndex(...from));
    if (!!piece) {
      position.set(getSquareIndex(...to), piece);
    }
    position.delete(getSquareIndex(...from));

    this._activeColor$.next(this._activeColor$.value === PieceColors.White ? PieceColors.Black : PieceColors.White);
    this._boardPosition$.next(position);
    this._selectedSquare$.next(null);
    this._availableMoves$.next([]);
  }
}
