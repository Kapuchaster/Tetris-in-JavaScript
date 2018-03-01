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

  function rotate(block, condition) {
    switch (block.symbol) {
      case 'L': {rotateL(block, condition); break;}
      case 'LO': {rotateLO(block, condition); break;}
      case 'Z': {rotateZ(block, condition); break;}
      case 'I': {rotateI(block, condition); break;}
      case 'O': {break;}
    }
  }

  function rotateI(block, condition) {
    let tempRotTile = {};
    tempRotTile.position = {y: block.position.y, x: block.position.x, r: block.position.r};
    rotateIHelper(tempRotTile);
    if (!condition(tempRotTile, 'rot')) {
      rotateIHelper(block);
    }
  }

  function rotateIHelper(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[1],[1],[1],[1]]; break;}
      case 1: {block.position.r=0; block.matrix=[[1,1,1,1]]; break;}
    }
  }

  function rotateL(block, condition) {
    let tempRotTile = {};
    tempRotTile.position = {y: block.position.y, x: block.position.x, r: block.position.r};
    rotateLHelper(tempRotTile);
    if (!condition(tempRotTile, 'rot')) {
      rotateLHelper(block);
    }
  }

  function rotateLHelper(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[1,1,1],[1,0,0]]; break;}
      case 1: {block.position.r=2; block.matrix=[[1,1],[0,1],[0,1]]; break;}
      case 2: {block.position.r=3; block.matrix=[[0,0,1],[1,1,1]]; break;}
      case 3: {block.position.r=0; block.matrix=[[1,0],[1,0],[1,1]]; break;}
    }
  }

  function rotateLO(block, condition) {
    let tempRotTile = {};
    tempRotTile.position = {y: block.position.y, x: block.position.x, r: block.position.r};
    rotateLOHelper(tempRotTile);
    if (!condition(tempRotTile, 'rot')) {
      rotateLOHelper(block);
    }
  }

  function rotateLOHelper(block) {
    switch (block.position.r) {
      case 0: {block.position.r=1; block.matrix=[[1,0,0],[1,1,1]]; break;}
      case 1: {block.position.r=2; block.matrix=[[1,1],[1,0],[1,0]]; break;}
      case 2: {block.position.r=3; block.matrix=[[1,1,1],[0,0,1]]; break;}
      case 3: {block.position.r=0; block.matrix=[[0,1],[0,1],[1,1]]; break;}
    }
  }

  function rotateZ(block, condition) {
    let tempRotTile = {};
    tempRotTile.position = {y: block.position.y, x: block.position.x, r: block.position.r};
    rotateZHelper(tempRotTile);
    if (!condition(tempRotTile, 'rot')) {
      rotateZHelper(block);
    }
  }

  function rotateZHelper(block) {
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
