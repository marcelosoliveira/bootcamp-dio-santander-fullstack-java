import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { BoardStateService } from '../services/board-state.service';
import { Piece, PieceColors } from '../models/piece.model';
import { getSquareIndex } from '../utils/square';
import { getPieceColor, getPieceImage } from '../utils/piece';

@UntilDestroy()
@Directive({
  selector: '[chessLogicSquare]',
})
export class LogicSquareDirective implements OnInit {

  @Input('chessLogicSquare') rankAndFile!: [number, number];

  private readonly el: Element;

  private activeColor!: PieceColors;
  private squareIndex!: number;
  private piece!: Piece | undefined;
  private availableMoves: number[] = [];

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private cdkDrag: CdkDrag<[number, number]>,
              private cdkDropList: CdkDropList<[number, number]>,
              private boardStateService: BoardStateService) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    this.squareIndex = getSquareIndex(...this.rankAndFile);

    this.cdkDrag.data = this.rankAndFile;
    this.cdkDropList.data = this.rankAndFile;

    this.boardStateService.activeColor$
      .pipe(untilDestroyed(this))
      .subscribe(color => this.activeColor = color);

    this.boardStateService.boardPosition$
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        this.piece = value.get(this.squareIndex);

        this.cdkDrag.disabled = !this.piece || getPieceColor(this.piece) !== this.activeColor;

        this.updateSquareImage();
      });

    this.boardStateService.selectedSquare$
      .pipe(untilDestroyed(this))
      .subscribe(rankAndFile => {
        this.updateSelectedSquare(rankAndFile);
      });

    this.boardStateService.availableMoves$
      .pipe(untilDestroyed(this))
      .subscribe(moves => {
        this.availableMoves = moves;

        this.updateAvailableMove();
      });

    this.cdkDrag.started
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        this.boardStateService.selectSquare(value.source.data);
      });

    this.cdkDropList.dropped
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        if (value.item.data !== value.container.data
          && this.availableMoves.includes(getSquareIndex(...value.container.data))) {
          this.boardStateService.makeMove(value.item.data, value.container.data);
        }
      });
  }

  @HostListener('mousedown') private onClick() {
    this.boardStateService.selectSquare(this.rankAndFile);
  }

  private updateSquareImage() {
    const imgEl = Array.from(this.el.children).find(child => child.tagName.toLowerCase() === 'img') as HTMLImageElement;

    if (!!this.piece) {
      if (!!imgEl) {
        imgEl.src = getPieceImage(this.piece);
      } else {
        const img = this.renderer.createElement('img') as HTMLImageElement;
        img.src = getPieceImage(this.piece);
        img.alt = this.piece;

        this.renderer.appendChild(this.el, img);
      }
    } else if (!!imgEl) {
      this.renderer.removeChild(this.el, imgEl);
    }
  }

  private updateSelectedSquare(rankAndSquare: [number, number] | null) {
    const hasSelectedClass = this.el.parentElement?.classList.contains('selected');

    if ((!rankAndSquare || getSquareIndex(...rankAndSquare) !== this.squareIndex) && hasSelectedClass) {
      this.renderer.removeClass(this.el.parentElement, 'selected');
    } else if (!!rankAndSquare && getSquareIndex(...rankAndSquare) === this.squareIndex && !hasSelectedClass) {
      this.renderer.addClass(this.el.parentElement, 'selected');
    }
  }

  private updateAvailableMove() {
    const hint = Array.from(this.el.children)
      .find(child => child.classList.contains('available-move') || child.classList.contains('available-capture'));

    if (this.availableMoves.includes(this.squareIndex)) {
      if (!hint) {
        const availableMove = this.renderer.createElement('div') as HTMLDivElement;
        this.renderer.addClass(availableMove, this.piece ? 'available-capture' : 'available-move');
        this.renderer.appendChild(this.el, availableMove);
      }
    } else if (!!hint) {
      this.renderer.removeChild(this.el, hint);
    }
  }
}
