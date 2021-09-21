const playerOneShakeButton = document.querySelector("#shakePlayerOne");
const playerTwoShakeButton = document.querySelector("#shakePlayerTwo");

let images =[
  "assets/dice-01.svg",
  "assets/dice-02.svg",
  "assets/dice-03.svg",
  "assets/dice-04.svg",
  "assets/dice-05.svg",
  "assets/dice-06.svg"];



let dice = document.querySelectorAll("img");

const roll = () => {
  dice.forEach((die) => {
    die.classList.add("shake");
  });
  setTimeout(function() {
    dice.forEach(function(die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor((Math.random()*6))
    ;
    let dieTwoValue = Math.floor((Math.random()*6))
    ;
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue +1) + (dieTwoValue +1))
  
  },
  1000
  );
}
// playerOneShakeButton.addEventListener("click", () => roll());
// playerTwoShakeButton.addEventListener("click", () => roll());

