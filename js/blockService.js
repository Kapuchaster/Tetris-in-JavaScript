'use strict'

var blockService = (function () {

  function moveDown(block) {
    block.position.y++;
  }

  function moveLeft(block) {
    if (block.position.x > 0) { // + height of Block
      block.position.x--;
    }
  }

  function moveRight(block) {
    if (block.position.x < 9) { // + width of Block
      block.position.x++;
    }
  }

  return {
    moveDown: moveDown,
    moveLeft: moveLeft,
    moveRight: moveRight
  };
})();
