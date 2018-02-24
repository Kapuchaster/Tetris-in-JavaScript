'use strict'

var map = (function () {
  let mapFileds = [];

  (function createAndInitMap () {
    for (let h = 0; h < 16; h++) {
      let tmpRow = [];
      for (let w = 0; w < 10; w++) {
        tmpRow.push(0);
      }
      mapFileds.push(tmpRow);
    }
  })();

  function getMap() {return mapFileds;}

  function addToMap(block) {
    let x = block.position.x;
    let y = block.position.y;
    for (let w = x; w < block.matrix[0].length + x; w++) {
      for (let h = y; h < block.matrix.length + y; h++) {
        mapFileds[h][w] = block.matrix[h-y][w-x];
      }
    }
  }

  function prepareAndGetTempMoveMap(block) {
    let tempMoveMap = mapFileds.map(function(arr) {
      return arr.slice();
    });
    let x = block.position.x;
    let y = block.position.y;

    for (let w = x; w < block.matrix[0].length + x; w++) {
      for (let h = y; h < block.matrix.length + y; h++) {
        tempMoveMap[h][w] = block.matrix[h-y][w-x];
      }
    }
    return tempMoveMap;
  }

  function checkCollision(x, y, block) {

  }

  let mapObject = {
    getMap: getMap,
    addToMap: addToMap,
    checkCollision: checkCollision,
    prepareAndGetTempMoveMap: prepareAndGetTempMoveMap
  };

  return mapObject;
})();
