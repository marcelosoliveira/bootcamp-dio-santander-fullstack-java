import { Piece, PieceColors, PieceTypes } from '../models/piece.model';
import { getSquareIndex } from './square';
import { getPieceColor, getPieceType } from './piece';

export function getAvailableMoves(position: Map<number, Piece>, rankAndFile: [number, number]): number[] {
  const index = getSquareIndex(...rankAndFile);
  const piece = position.get(index);

  if (!!piece) {
    const pieceType = getPieceType(piece);
    const pieceColor = getPieceColor(piece);

    switch (pieceType) {
      case PieceTypes.Pawn:
        return getPawnMoves(position, ...rankAndFile, pieceColor);
      case PieceTypes.Knight:
        return getKnightMoves(position, ...rankAndFile, pieceColor);
      case PieceTypes.Bishop:
        return getBishopMoves(position, ...rankAndFile, pieceColor);
      case PieceTypes.Rook:
        return getRookMoves(position, ...rankAndFile, pieceColor);
      case PieceTypes.Queen:
        return getQueenMoves(position, ...rankAndFile, pieceColor);
      case PieceTypes.King:
        return getKingMoves(position, ...rankAndFile, pieceColor);
      default:
        return [];
    }
  }

  return [];
}

function getPawnMoves(position: Map<number, Piece>, rank: number, file: number, color: PieceColors): number[] {
  const multiplier = color === PieceColors.White ? -1 : 1;
  const oppositeColor = color === PieceColors.White ? PieceColors.Black : PieceColors.White;

  let possibleMoves = [
    getSquareIndex(rank + (1 * multiplier), file),
    getSquareIndex(rank + (2 * multiplier), file),
  ]
    .filter(index => !position.has(index));

  if (possibleMoves.length === 1 && possibleMoves[0] === getSquareIndex(rank + (2 * multiplier), file)) {
    possibleMoves = [];
  }

  if ((color === PieceColors.White && rank !== 6) || (color === PieceColors.Black && rank !== 1)) {
    possibleMoves = possibleMoves.filter(move => move !== getSquareIndex(rank + (2 * multiplier), file));
  }

  if (file !== 0) {
    const ldPiece = position.get(getSquareIndex(rank + (1 * multiplier), file - 1));
    if (!!ldPiece && getPieceColor(ldPiece) === oppositeColor) {
      possibleMoves.push(getSquareIndex(rank + (1 * multiplier), file - 1));
    }
  }

  if (file !== 7) {
    const rdPiece = position.get(getSquareIndex(rank + (1 * multiplier), file + 1));
    if (!!rdPiece && getPieceColor(rdPiece) === oppositeColor) {
      possibleMoves.push(getSquareIndex(rank + (1 * multiplier), file + 1));
    }
  }

  return possibleMoves;
}

function getKnightMoves(position: Map<number, Piece>, rank: number, file: number, color: PieceColors): number[] {
  let possibleMoves: [number, number][] = [
    [rank - 2, file + 1],
    [rank - 1, file + 2],
    [rank + 1, file + 2],
    [rank + 2, file + 1],
    [rank + 2, file - 1],
    [rank + 1, file - 2],
    [rank - 1, file - 2],
    [rank - 2, file - 1],
  ];

  possibleMoves = possibleMoves.filter(([rank, file]) => {
    if (rank < 0 || rank > 7 || file < 0 || file > 7) {
      return false;
    }
    const piece = position.get(getSquareIndex(rank, file));

    return !(!!piece && getPieceColor(piece) === color);
  });

  return possibleMoves.map(([rank, file]) => getSquareIndex(rank, file));
}

function getBishopMoves(position: Map<number, Piece>, rank: number, file: number, color: PieceColors): number[] {
  const directions: [number, number][] = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const possibleMoves: [number, number][] = [];

  directions.forEach(([deltaRank, deltaFile]) => {
    let auxRank = rank + deltaRank;
    let auxFile = file + deltaFile;

    while (auxRank >= 0 && auxRank <= 7 && auxFile >= 0 && auxFile <= 7) {
      const piece = position.get(getSquareIndex(auxRank, auxFile));

      if (!!piece) {
        if (getPieceColor(piece) !== color) {
          possibleMoves.push([auxRank, auxFile]);
        }
        break;
      } else {
        possibleMoves.push([auxRank, auxFile]);
      }

      auxRank += deltaRank;
      auxFile += deltaFile;
    }
  });

  return possibleMoves.map(([rank, file]) => getSquareIndex(rank, file));
}

function getRookMoves(position: Map<number, Piece>, rank: number, file: number, color: PieceColors): number[] {
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const possibleMoves: [number, number][] = [];

  directions.forEach(([deltaRank, deltaFile]) => {
    let auxRank = rank + deltaRank;
    let auxFile = file + deltaFile;

    while (auxRank >= 0 && auxRank <= 7 && auxFile >= 0 && auxFile <= 7) {
      const piece = position.get(getSquareIndex(auxRank, auxFile));

      if (!!piece) {
        if (getPieceColor(piece) !== color) {
          possibleMoves.push([auxRank, auxFile]);
        }
        break;
      } else {
        possibleMoves.push([auxRank, auxFile]);
      }

      auxRank += deltaRank;
      auxFile += deltaFile;
    }
  });

  return possibleMoves.map(([rank, file]) => getSquareIndex(rank, file));
}

function getQueenMoves(position: Map<number, Piece>, rank: number, file: number, color: PieceColors): number[] {
  const directions: [number, number][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const possibleMoves: [number, number][] = [];

  directions.forEach(([deltaRank, deltaFile]) => {
    let auxRank = rank + deltaRank;
    let auxFile = file + deltaFile;

    while (auxRank >= 0 && auxRank <= 7 && auxFile >= 0 && auxFile <= 7) {
      const piece = position.get(getSquareIndex(auxRank, auxFile));

      if (!!piece) {
        if (getPieceColor(piece) !== color) {
          possibleMoves.push([auxRank, auxFile]);
        }
        break;
      } else {
        possibleMoves.push([auxRank, auxFile]);
      }

      auxRank += deltaRank;
      auxFile += deltaFile;
    }
  });

  return possibleMoves.map(([rank, file]) => getSquareIndex(rank, file));
}

function getKingMoves(position: Map<number, Piece>, rank: number, file: number, color: PieceColors): number[] {
  let possibleMoves: [number, number][] = [
    [rank - 1, file],
    [rank - 1, file + 1],
    [rank, file + 1],
    [rank + 1, file + 1],
    [rank + 1, file],
    [rank + 1, file - 1],
    [rank, file - 1],
    [rank - 1, file - 1],
  ];

  possibleMoves = possibleMoves.filter(([rank, file]) => {
    if (rank < 0 || rank > 7 || file < 0 || file > 7) {
      return false;
    }
    const piece = position.get(getSquareIndex(rank, file));

    return !(!!piece && getPieceColor(piece) === color);
  });

  return possibleMoves.map(([rank, file]) => getSquareIndex(rank, file));
}
