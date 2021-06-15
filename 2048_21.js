console.log("2048_21 started");
var boardData = {};

boardData["row2col0"] = "8";
boardData["row3col2"] = "2";

function createBoard() {

  var boardDiv = document.querySelector("#board");

  for (var row=0; row<4; row++){
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    boardDiv.appendChild(rowDiv);


    for (var col=0; col<4; col++){
      var tileId = "row" + row + "col" + col;
      var colDiv = document.createElement("div");
      colDiv.classList.add("tile");
      colDiv.id = tileId;
        rowDiv.appendChild(colDiv);

    }
  }
}

function tileKey(row,col) {
  return  "row" + row + "col" + col;
}

function updateBoard() {

  for (var row=0; row<4; row++){
    for (var col=0; col<4; col++){

      var value = boardData[tileId];
      if(value){
        var  tileDiv = document.querySelector("#" + tileID);
        tileDiv.innerHTML = value;
        tileDiv.classList.add("tile" + value);
      } else {
        tileDiv.innerHTML = "";
        tileDiv.classList = ["tile"];
      }

    }
  }
}

createBoard();
updateBoard();
