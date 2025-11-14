export function applyMondayBonus(scoreBoard) {
  for (const player in scoreBoard) {
    scoreBoard[player] += 100 ;
  }
  return scoreBoard;
}