import { Piece, PieceColors, PieceTypes } from '../models/piece.model';

export function getPieceType(piece: Piece): PieceTypes {
  return piece.split('-')[0] as PieceTypes;
}

export function getPieceColor(piece: Piece): PieceColors {
  return piece.split('-')[1] as PieceColors;
}

export function getPieceImage(piece: Piece): string {
  return `./assets/icons/${piece?.toLowerCase()}.svg`;
}
