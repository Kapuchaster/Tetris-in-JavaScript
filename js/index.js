(
  function init() {
    'use strict'
    // Timeout funciton will call JS script after DOM is ready.
    setTimeout(function(){
      // In this scope the following variables are available:
      // map, blockFactory.

      let testTile = blockFactory.createNewBlock();
      // map.addToMap(testTile);

      setInterval(function(){
        mapToRender (map.prepareAndGetTempMoveMap(testTile));
        blockService.moveDown(testTile);
      },1000);

      document.addEventListener('keydown', (event) => {
        let keyName = event.key;
        if (keyName === 'ArrowLeft') {
          blockService.moveLeft(testTile);
          mapToRender (map.prepareAndGetTempMoveMap(testTile));
        }
        if (keyName === 'ArrowRight') {
          blockService.moveRight(testTile);
          mapToRender (map.prepareAndGetTempMoveMap(testTile));
        }
        if (keyName === 'ArrowUp') {
          blockService.rotate(testTile);
          mapToRender (map.prepareAndGetTempMoveMap(testTile));
        }
        if (keyName === 'ArrowDown') {
          blockService.moveDown(testTile);
          mapToRender (map.prepareAndGetTempMoveMap(testTile));
        }
      });
//--------------RENDER TEST-----------------

  function mapToRender(tempMap) {
    let htmlMap = document.getElementById("game-box");
    htmlMap.innerText = "";
    for (let h = 0; h < tempMap.length; h++) {
      for (let w = 0; w < tempMap[0].length; w++) {
        let div = document.createElement("div");
        div.classList.add("block");
        div.style.display = "inline-block";
        if (tempMap[h][w]) {
          div.style.backgroundColor = "red";
        }
        htmlMap.appendChild(div);
      }
    }
  }

//----------------Test End------------------

    });
  }
)();
