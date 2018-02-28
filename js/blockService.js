'use strict'

var blockService = (function () {

  function moveDown(block, condition) {
    if ((block.position.y + block.matrix.length) >= 16) {
      return false;
    }

    if (typeof condition === "function") {
      if (condition(block, 'down'))
        return false;
    }

    block.position.y++;
    return true;
  }

  function moveLeft(block, condition) {
    if (block.position.x <= 0) {
      return false;
    }

    if (typeof condition === "function") {
      if (condition(block, 'left'))
        return false;
    }

    block.position.x--;
    return true;
  }

  function moveRight(block, condition) {
    if ((block.position.x + block.matrix[0].length) >= 10) {
      return false;
    }

    if (typeof condition === "function") {
      if (condition(block, 'right'))
        return false;
    }

    block.position.x++;
    return true;
  }

  function rotate(block) {
    switch (block.symbol) {
      case 'L': {rotateL(block); break;}
      case 'LO': {rotateLO(block); break;}
      case 'Z': {rotateZ(block); break;}
      case 'I': {rotateI(block); break;}
      case 'O': {break;}
    }
  }

  function rotateI(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[1],[1],[1],[1]]; break;}
      case 1: {block.position.r=0; block.matrix=[[1,1,1,1]]; break;}
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
