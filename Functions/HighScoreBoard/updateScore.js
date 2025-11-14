export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}