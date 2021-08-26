export function getSquareIndex(rank: number, file: number): number {
  return 63 - ((8 * (rank + 1)) - (file + 1));
}
