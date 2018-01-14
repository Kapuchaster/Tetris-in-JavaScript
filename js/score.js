// This object represents any score available in this game.
// Singleton pattern used here.
'use strict'

function Score() {
  var instance;

  Score = function Score() {
    return instance;
  }

  Score.prototype = this;
  instance = new Score();
  instance.constructor = Score;

  var score = 0;
  var bestScore = 0;

  instance.getScore = function () {
    return score;
  }
  instance.addToScore = function (points) {
    score += points
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
