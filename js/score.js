// This object represents any score available in this game.
// Singleton pattern used here.
'use strict'

function Score() {
  let instance;

  Score = function Score() {
    return instance;
  }

  Score.prototype = this;
  instance = new Score();
  instance.constructor = Score;

  let score = 0;
  let bestScore = 0;

  instance.getScore = function () {
    return score;
  }
  instance.addToScore = function (points) {
    points ? points : 100;
    score += points;
  }
  instance.setScore = function (newScore) {
    score = newScore;
  }
  instance.getBestScore = function () {
    return bestScore;
  }
  instance.addToBestScore = function (points) {
    bestScore += points
  }
  instance.setBestScore = function (newScore) {
    bestScore = newScore;
  }

  return instance;
}
