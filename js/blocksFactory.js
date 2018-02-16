"use strict"

function Block () {
  this.symbol = '';
  this.shape = [];
}

  let symbolArray = ['L', 'LO', 'O'];
  let randSymbol = getRandSymbol (symbolArray);
  let randBlock = getBlock(randSymbol);
  return randBlock;

  function getRandSymbol (symbolArray) {
    var randNum = Math.floor((Math.random() * symbolArray.length));
  }

  function getBlock(symbol) {
    let L = [[1,0],[1,0],[1,1]];
    let LO = [[0,1],[0,1],[1,1]];
    let O = [[1,1],[1,1]];

    switch (symbol) {
      case 'L': return L;
      case 'LO': return LO;
      case 'O': return O;
    }
  }
