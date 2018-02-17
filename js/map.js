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

  function addToMap(x, y, block) {
    if (!Array.isArray(block)) {throw "block is not an array";}
  }

  function checkCollision(x, y, block) {

  }

  let mapObject = {
    getMap: getMap,
    addToMap: addToMap,
    checkCollision: checkCollision
  };

  return mapObject;
})();
