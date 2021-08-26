export enum PieceTypes {
  Pawn = 'Pawn',
  Knight = 'Knight',
  Bishop = 'Bishop',
  Rook = 'Rook',
  Queen = 'Queen',
  King = 'King',
}

export enum PieceColors {
  Black = 'Black',
  White = 'White',
}

export type Piece = `${ PieceTypes }-${ PieceColors }`;
