let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // can be X for player1 or 0 for player2
// tic tac toe would be like 
//0 1 2
//3 4 5
//6 7 8
// winning patterns are 
// 0,1,2 - 3,4,5 - 6,7,8 - 0,3,6 - 1,4,7 - 2,5,8 - 0,4,8 - 2,4,6 and these will be stored in 2d array
const winPatterns = [
     [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[ 6,7,8],
];

const resetGame = ()=>{
     turn0 = true;
     enableBox();
     msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
          console.log("box was clicked");
          if(turn0){ // player1 ki turn
               box.innerText = "O";
               turn0 = false;
          }
          else{// player2 ki turn
               box.innerText = "X"
               turn0 = true;
          }
          box.disabled = true;
          checkWinner();
     });
});

const enableBox = ()=>{
     for(let box of boxes){
          box.disabled = false;
          box.innerText = "";
     }
}
const disableBox = ()=>{
     for(let box of boxes){
          box.disabled = true;
     }
}
const showWinner = (winner) =>{
     msg.innerText = `Congratulations, winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBox();
};
const checkWinner = ()=>{
     for(pattern of winPatterns){
          let positionV1 = boxes[pattern[0]].innerText;
          let positionV2 = boxes[pattern[1]].innerText;
          let positionV3 = boxes[pattern[2]].innerText;
          if(positionV1 != ""&& positionV2 != "" && positionV3 !=""){
               if(positionV1===positionV2 && positionV2===positionV3){
                    console.log("winner",positionV1);
                    showWinner(positionV1);
               }
          }

     }
}

newGameBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);