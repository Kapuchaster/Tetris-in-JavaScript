(
  function init() {
    'use strict'
    // Timeout funciton will call JS script after DOM is ready.
    setTimeout(function(){
      // In this scope the following variables are available:
      // map, blockFactory, Score.

      let score = Score();
      let testTile = blockFactory.createNewBlock();

      setInterval(function(){

        if (!blockService.moveDown(testTile, map.checkNextMoveCollision)) {
          map.addToMap(testTile);
          map.removeDoneLines(score.addToScore);
          testTile = blockFactory.createNewBlock();
        };
        mapToRender (map.prepareAndGetTempMoveMap(testTile));
      }, 1000);

      document.addEventListener('keydown', (event) => {
        let keyName = event.key;
        if (keyName === 'ArrowLeft') {
          if (blockService.moveLeft(testTile, map.checkNextMoveCollision)) {
            mapToRender (map.prepareAndGetTempMoveMap(testTile));
          }
        }
        if (keyName === 'ArrowRight') {
          if (blockService.moveRight(testTile, map.checkNextMoveCollision)) {
            mapToRender (map.prepareAndGetTempMoveMap(testTile));
          }
        }
        if (keyName === 'ArrowUp') {
          blockService.rotate(testTile, map.checkNextMoveCollision)
          mapToRender (map.prepareAndGetTempMoveMap(testTile));
        }
        if (keyName === 'ArrowDown') {
          if (!blockService.moveDown(testTile, map.checkNextMoveCollision)) {
            map.addToMap(testTile);
            map.removeDoneLines(score.addToScore);
            testTile = blockFactory.createNewBlock();
          };
          mapToRender (map.prepareAndGetTempMoveMap(testTile));
        }
      });

//--------------RENDER Map-----------------

  function mapToRender(tempMap) {
    let htmlMap = document.getElementById("game-box");
    let htmlScore = document.getElementById("points");
    htmlScore.innerText = score.getScore();
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

    });
  }
)();
