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
        if (block.matrix[h-y][w-x]) {
          mapFileds[h][w] = block.matrix[h-y][w-x];
        }
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
        if (block.matrix[h-y][w-x]) {
          tempMoveMap[h][w] = block.matrix[h-y][w-x];
        }
      }
    }
    return tempMoveMap;
  }

  function checkNextMoveCollision(block, dir) {
    let x = block.position.x;
    let y = block.position.y;

    switch (dir) {
      case 'left': {x--; break;}
      case 'right': {x++; break;}
      case 'down': {y++; break;}
      case 'rot': {break;}
    }

    for (let w = x; w < block.matrix[0].length + x; w++) {
      for (let h = y; h < block.matrix.length + y; h++) {
        if (mapFileds[h][w] && block.matrix[h-y][w-x]) {
          return true;
        }
      }
    }
    return false;
  }

  function removeDoneLines(callback) {
    let lineLen = 0;
    let linesToRemove = [];
    for (let h = 0; h < mapFileds.length; h++) {
      lineLen = 0;
      for (let w = 0; w < mapFileds[0].length; w++) {
        if (mapFileds[h][w] === 1) {
          lineLen++;
        }
      }
      if (lineLen === 10) {
        linesToRemove.push(h);
      }
    }

    if (linesToRemove.length) {
      let tempNewLine = [];

      for (let i = 0; i < 10; i++) {
          tempNewLine.push(0);
      }

      for (let i = 0; i < linesToRemove.length; i++) {
        mapFileds.splice(linesToRemove[i], 1);
        mapFileds.unshift(tempNewLine);
      }
    }
  }

  let mapObject = {
    getMap: getMap,
    addToMap: addToMap,
    checkNextMoveCollision: checkNextMoveCollision,
    prepareAndGetTempMoveMap: prepareAndGetTempMoveMap,
    removeDoneLines: removeDoneLines

  };

  return mapObject;
})();
