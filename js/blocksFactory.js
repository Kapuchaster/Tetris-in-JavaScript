"use strict"

var blockFactory = (function () {

  function createNewBlock (blockParams) {
      let symbolArray = ['L', 'LO', 'O'];
      let randSymbol = getRandSymbol (symbolArray);
      let randBlock = getBlock (randSymbol);
      let tile = {
        symbol: randSymbol,
        matrix: randBlock,
        position: {y: 0, x: 0, r: 0}
      }
      return tile;

      function getRandSymbol (symbolArray) {
        let randIndex = Math.floor((Math.random() * symbolArray.length));
        return symbolArray[randIndex];
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
  }

  return {createNewBlock: createNewBlock};
})();
