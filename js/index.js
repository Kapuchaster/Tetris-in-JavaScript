(
  function init() {
    'use strict'
    // Timeout funciton will call JS script after DOM is ready.
    setTimeout(function(){
      // In this scope the following variables are available:
      // map, blockFactory.

      let testTile = blockFactory.createNewBlock();
      map.addToMap(3,3, testTile);



//--------------RENDER TEST-----------------

  let htmlMap = document.getElementById("game-box");
  for (let h = 0; h < map.getMap().length; h++) {
    for (let w = 0; w < map.getMap()[0].length; w++) {
      let div = document.createElement("div");
      div.classList.add("block");
      div.style.display = "inline-block";
      if (map.getMap()[h][w]) {
        div.style.backgroundColor = "red";
      }
      htmlMap.appendChild(div);
    }
  }

//----------------Test End------------------

    });
  }
)();
