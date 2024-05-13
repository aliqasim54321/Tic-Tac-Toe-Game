
let boxes = document.querySelector(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


[boxes].forEach((box) => {
    box.addEventListener("click",() => {
        console.log ("good morning");
        if(turnO){
            box.innerText = "O";
            turnO=false;            
        }
        else{
            box.innerText="X";
            turnO =true;
          
        }
        box.disabled = true;

        checkwinner();
    }); 


});
const checkwinner = () =>{
    for (let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]); 
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText); 
    }
}