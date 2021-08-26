import { Piece } from '../models/piece.model';
import { getSquareIndex } from './square';

export function getInitialBoardPosition(): Map<number, Piece> {
  const positions = new Map<number, Piece>();
  const ranks = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'.split('/');

  ranks.forEach((rank, i) => {
    if (rank !== '8') {
      rank.split('').forEach((square, j) => {
        if (isNaN(parseInt(square, 10))) {
          const piece = fenToPiece(square);
          if (!!piece) {
            positions.set(getSquareIndex(i, j), piece);
          }
        }
      });
    }
  });

  return positions;
}

function fenToPiece(value: string): Piece | null {
  switch (value) {
    case 'p':
      return 'Pawn-Black';
    case 'P':
      return 'Pawn-White';
    case 'n':
      return 'Knight-Black';
    case 'N':
      return 'Knight-White';
    case 'b':
      return 'Bishop-Black';
    case 'B':
      return 'Bishop-White';
    case 'r':
      return 'Rook-Black';
    case 'R':
      return 'Rook-White';
    case 'q':
      return 'Queen-Black';
    case 'Q':
      return 'Queen-White';
    case 'k':
      return 'King-Black';
    case 'K':
      return 'King-White';
    default:
      return null;
  }
}
