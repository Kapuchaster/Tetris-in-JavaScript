"use strict"

var blockFactory = (function () {

  function createNewBlock (blockParams) {
      let symbolArray = ['L', 'LO', 'O', 'Z'];
      let colorArray = ['red', 'green', 'yellow', 'blue'];
      let randSymbol = getRandFromArray (symbolArray);
      let randBlock = getBlock (randSymbol);
      let randColor = getRandFromArray (colorArray);
      let tile = {
        symbol: randSymbol,
        matrix: randBlock,
        color: randColor,
        position: {y: 0, x: 0, r: 0}
      }
      return tile;

      function getRandFromArray (symbolArray) {
        let randIndex = Math.floor((Math.random() * symbolArray.length));
        return symbolArray[randIndex];
      }

      function getBlock(symbol) {
        let L = [[1,0],[1,0],[1,1]];
        let LO = [[0,1],[0,1],[1,1]];
        let O = [[1,1],[1,1]];
        let Z = [[1,1,0],[0,1,1]];

        switch (symbol) {
          case 'L': return L;
          case 'LO': return LO;
          case 'O': return O;
          case 'Z': return Z;
        }
      }
  }

  return {createNewBlock: createNewBlock};
})();
