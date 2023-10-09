const numbersDiv = document.querySelector("#numbers p");
const numButtons = document.querySelectorAll("button:not(.calcbutton,.reset,.equals)");
const calcButtons = document.querySelectorAll(".calcbutton");

numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const number = event.currentTarget.textContent;
    numbersDiv.textContent += number;
  });
});

calcButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const textThing = event.currentTarget.textContent
    if (textThing === "X"){
      numbersDiv.textContent += "*"
    }
     else{
      numbersDiv.textContent += textThing
     }
  });
});

const resetCalculator = () => {
  numbersDiv.textContent = "";
};

const performCalculation = () => {
  numbersDiv.textContent = eval(numbersDiv.textContent)
};
