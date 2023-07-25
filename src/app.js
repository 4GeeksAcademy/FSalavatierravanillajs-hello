/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateNumber(e) {
  let randomNum = Math.floor(Math.random() * 12) + 1;
  let randomFig = Math.floor(Math.random() * 4) + 1;
  let numberDom = document.getElementById("numero");
  let figureDom = document.getElementById("figura");
  let figureBDom = document.getElementById("figuraB");

  numberDom.innerHTML = randomNum;

  numberDom.classList.add(
    randomFig < 3
      ? (numberDom.style.color = "red")
      : (numberDom.style.color = "black")
  );

  if (randomFig === 1) {
    figureDom.innerHTML = "♥";
    figureBDom.innerHTML = "♥";
  } else if (randomFig === 2) {
    figureDom.innerHTML = "♦";
    figureBDom.innerHTML = "♦";
  } else if (randomFig === 3) {
    figureDom.innerHTML = "♣";
    figureBDom.innerHTML = "♣";
  } else if (randomFig === 4) {
    figureDom.innerHTML = "♠";
    figureBDom.innerHTML = "♠";
  }
  numberDom.addEventListener("click", changeColor);

  if (
    randomFig < 3
      ? (figureBDom.style.color = "red")
      : (figureBDom.style.color = "black")
  );
  if (
    randomFig < 3
      ? (figureDom.style.color = "red")
      : (figureDom.style.color = "black")
  );
}
function changeColor(e) {
  let numberDom = e.target;
  if (numberDom.classList.contains("negro")) {
    numberDom.classList.remove("negro");
    numberDom.classList.add("rojo");
  } else {
    numberDom.classList.remove("rojo");
    numberDom.classList.add("negro");
  }
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  document
    .getElementsByClassName("card")
    .item(0)
    .addEventListener("click", generateNumber);
};
