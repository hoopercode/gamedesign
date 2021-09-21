"use strict";

var playerOneShakeButton = document.querySelector("#shakePlayerOne");
var playerTwoShakeButton = document.querySelector("#shakePlayerTwo");
var images = ["assets/dice-01.svg", "assets/dice-02.svg", "assets/dice-03.svg", "assets/dice-04.svg", "assets/dice-05.svg", "assets/dice-06.svg"];
var dice = document.querySelectorAll("img");

var roll = function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    var dieOneValue = Math.floor(Math.random() * 6);
    var dieTwoValue = Math.floor(Math.random() * 6);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML = "Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1));
  }, 1000);
};

playerOneShakeButton.addEventListener("click", function () {
  return roll();
});
playerTwoShakeButton.addEventListener("click", function () {
  return roll();
});