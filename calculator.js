const numbersDiv = document.querySelector("#numbers p");
const numButtons = document.querySelectorAll(".numbutton");
const calcButtons = document.querySelectorAll(".calcbutton");

let isFirstNumDone = true;
let firstNumber;
let secondNumber = "";
let operator = "";

numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const number = event.currentTarget.textContent;
    numbersDiv.textContent += number;
    if (!isFirstNumDone) {
      secondNumber += number;
    }
  });
});

calcButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (isFirstNumDone) {
      firstNumber = numbersDiv.textContent;
      numbersDiv.textContent += ` ${event.currentTarget.textContent} `;
      isFirstNumDone = false;
    } else {
      numbersDiv.textContent = `${firstNumber} ${event.currentTarget.textContent} ${secondNumber}`;
    }
    operator = event.currentTarget.textContent;
  });
});

const resetCalculator = () => {
  numbersDiv.textContent = "";
  isFirstNumDone = true;
  secondNumber = "";
};

const performCalculation = () => {
  if (isFirstNumDone) {
    return;
  }

  const parsedFirstNumber = parseFloat(firstNumber);
  const parsedSecondNumber = parseFloat(secondNumber);
  let result;

  switch (operator) {
    case "+":
      result = parsedFirstNumber + parsedSecondNumber;
      break;
    case "-":
      result = parsedFirstNumber - parsedSecondNumber;
      break;
    case "/":
      result = Math.round((parsedFirstNumber / parsedSecondNumber) * 100) / 100;
      break;
    case "X":
      result = parsedFirstNumber * parsedSecondNumber;
      break;
  }

  numbersDiv.textContent = result;
  isFirstNumDone = true;
  secondNumber = "";
};
