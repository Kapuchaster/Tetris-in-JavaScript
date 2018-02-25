'use strict'

var blockService = (function () {

  function moveDown(block) {
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
      case 'Z': {rotateZ(block); break;}
      case 'O': {break;}
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

  function rotateLO(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[1,0,0],[1,1,1]]; break;}
      case 1: {block.position.r=2; block.matrix=[[1,1],[1,0],[1,0]]; break;}
      case 2: {block.position.r=3; block.matrix=[[1,1,1],[0,0,1]]; break;}
      case 3: {block.position.r=0; block.matrix=[[0,1],[0,1],[1,1]]; break;}
    }
  }

  function rotateZ(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[0,1],[1,1],[1,0]]; break;}
      case 1: {block.position.r=0; block.matrix=[[1,1,0],[0,1,1]]; break;}
    }
  }

  return {
    moveDown: moveDown,
    moveLeft: moveLeft,
    moveRight: moveRight,
    rotate: rotate
  };
})();
