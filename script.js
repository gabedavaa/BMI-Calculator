"use strict";
//////////////////////
const inputAllElement = document.querySelectorAll(".input");

const computeButton = document.getElementById("btn-bmi");
const inputHeightElement = document.getElementById("height");
const inputWeightElement = document.getElementById("weight");
const inputResultElement = document.getElementById("bmi-result");
const clearButton = document.getElementById("btn-clear");
const weightCondition = document.getElementById("weight-condition");

computeButton.addEventListener("click", function (e) {
  if (inputWeightElement.value && inputHeightElement.value) {
    const resultBMI = (
      +(inputWeightElement.value * 10000) /
      +(inputHeightElement.value * inputHeightElement.value)
    ).toFixed(1);
    inputResultElement.value = resultBMI;

    if (resultBMI < 18.5) weightCondition.innerText = "Underweight";
    if (resultBMI >= 18.5 && resultBMI < 25)
      weightCondition.innerText = "Normal";
    if (resultBMI >= 25 && resultBMI < 35)
      weightCondition.innerText = "Overweight";
    if (resultBMI >= 35) weightCondition.innerText = "Obesity";
  }
});

clearButton.addEventListener("click", function (e) {
  if (
    inputHeightElement.value ||
    inputResultElement.value ||
    inputWeightElement.value
  ) {
    inputAllElement.forEach((input) => (input.value = ""));
  }
});
