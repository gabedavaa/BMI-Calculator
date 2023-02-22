"use strict";
//////////////////////
const inputAllElement = document.querySelectorAll(".input");

const computeButton = document.getElementById("btn-bmi");
const inputHeightElement = document.getElementById("height");
const inputWeightElement = document.getElementById("weight");
const inputResultElement = document.getElementById("bmi-result");
const clearButton = document.getElementById("btn-clear");

computeButton.addEventListener("click", function (e) {
  console.log(inputHeightElement.value);
  console.log(inputWeightElement.value);

  console.log(
    (inputResultElement.value =
      Number(inputWeightElement) /
      (Number(inputHeightElement) * Number(inputHeightElement)))
  );
});

clearButton.addEventListener("click", function (e) {
  inputAllElement.forEach((input) => (input.value = ""));
});
