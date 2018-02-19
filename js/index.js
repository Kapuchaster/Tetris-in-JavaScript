(
  function init() {
    'use strict'
    // Timeout funciton will call JS script after DOM is ready.
    setTimeout(function(){
      // In this scope the following variables are available:
      // map, blockFactory.

      let testTile = blockFactory.createNewBlock();
      map.addToMap(3,3, testTile);
      
    });
  }
)();
