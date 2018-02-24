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
    if ((block.position.x + block.matrix[0].length) < 10) {
      block.position.x++;
    }
  }

  function rotate(block) {
    switch (block.symbol) {
      case 'L': {rotateL(block); break;}
      case 'LO': {rotateLO(block); break;}
      case 'O': {rotateO(block); break;}
    }
  }

  function rotateL(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[1,1,1],[1,0,0]]; break;}
      case 1: {block.position.r=2; block.matrix=[[1,1],[0,1],[0,1]]; break;}
      case 2: {block.position.r=3; block.matrix=[[0,0,1],[1,1,1]]; break;}
      case 3: {block.position.r=0; block.matrix=[[1,0],[1,0],[1,1]]; break;}
    }
  }

  let L = [[1,0],[1,0],[1,1]];
  let LO = [[0,1],[0,1],[1,1]];
  let O = [[1,1],[1,1]];

  function rotateLO(block) {

  }

  function rotateO(block) {

  }
  return {
    moveDown: moveDown,
    moveLeft: moveLeft,
    moveRight: moveRight,
    rotate: rotate
  };
})();
