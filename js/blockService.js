'use strict'

var blockService = (function () {

  function moveDown(block) { // + height of Block
    if ((block.position.y + block.matrix.length) < 16) {
      block.position.y++;
    }
  }

  function moveLeft(block) {
    if (block.position.x > 0) {
      block.position.x--;
    }
  }

  function moveRight(block) {
    if ((block.position.x + + block.matrix[0].length) < 10) {
      block.position.x++;
    }
  }

  return {
    moveDown: moveDown,
    moveLeft: moveLeft,
    moveRight: moveRight
  };
})();
