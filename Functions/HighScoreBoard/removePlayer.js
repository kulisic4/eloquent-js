export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}