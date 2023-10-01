const numbersDiv = document.querySelector("#numbers p");
const numBtn = document.querySelectorAll(".numbutton");
const calcBtn = document.querySelectorAll(".calcbutton");

let mathStatus = true;
let firstNum;
let secondNum = "";
let symbol = "";
// numBtn.addEventListener("click", (event) => {
//   console.log(evet.currentTarget.textContent);
// });
numBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.currentTarget.textContent);
    nums = event.currentTarget.textContent;
    numbersDiv.textContent += nums;
    if (!mathStatus){
        secondNum += nums;
    }
  });
});

calcBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (mathStatus){
        firstNum = numbersDiv.textContent;
        numbersDiv.textContent += ` ${event.currentTarget.textContent} `;
        mathStatus = false;
    }
    else{
        numbersDiv.textContent = `${firstNum} ${event.currentTarget.textContent} ${secondNum}`
    }
    symbol = event.currentTarget.textContent;
  });
});

const resetBtn = () => {
    numbersDiv.textContent = ""
    mathStatus = true;
    secondNum = "";
};

const sumBtn = () =>{
    if (mathStatus){
        return;
    }
    let first = parseInt(firstNum);
    let second = parseInt(secondNum);
    let result;
    switch(symbol) {
        case "+":
            result = first+second;
            break;
        case "-":
            result = first-second;
            break;
        case "/":
            result = Math.round((first/second) * 100) / 100;
            break;
        case "X":
            result = (first*second)
            break;
    }
    numbersDiv.textContent = result;
    mathStatus = true;
    secondNum = "";
};