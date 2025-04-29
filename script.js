// SET UP VARIABLES:
let x = 100;
let y = 100;
const stepSize = 10;
let stepsTaken = 0;

// SELECT ELEMENTS:
const sprite = document.querySelector("#sprite");
const stepCounter = document.querySelector("#step-counter");
const resetBtn = document.querySelector("#reset-btn");

// USE ARROW KEYS TO MOVE: 
document.addEventListener("keydown", moveSprite);

function moveSprite(event) {
  if (event.key === "ArrowUp") {
    y -= stepSize; 
    stepsTaken += 1;
    updatePosition(); // Where is this function defined??
  } 
  else if (event.key === "ArrowDown") {
    y += stepSize;
    stepsTaken += 1;
    updatePosition();
  } 
  else if (event.key === "ArrowLeft") {
    x -= stepSize;
    stepsTaken += 1;
    updatePosition();
  } 
  else if (event.key === "ArrowRight") {
    x += stepSize;
    stepsTaken += 1;
    updatePosition();
  }
}

function updatePosition() {
  sprite.style.left = x + "px";
  sprite.style.top = y + "px";
  stepCounter.textContent = "Steps Taken: " + stepsTaken;
}

// RESET BUTTON: 
resetBtn.addEventListener("click", resetPosition);

function resetPosition() {
    x = 100;
    y = 100;
    stepsTaken = 0;
    updatePosition();
}