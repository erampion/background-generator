const css = document.querySelector('#current-colors');
const firstColor = document.querySelector('#first-color');
const secondColor = document.querySelector('#second-color');
const body = document.querySelector('#gradient');
const randomBtn = document.querySelector('#random-btn');
const buttonOne = document.querySelector('#btn-1');
const buttonTwo = document.querySelector('#btn-2');

// Event Listeners for the color inputs
firstColor.addEventListener('input', setGradient);
secondColor.addEventListener('input', setGradient);
randomBtn.addEventListener('click', randomGradient);
buttonOne.addEventListener('click', firstRandom);
buttonTwo.addEventListener('click', secondRandom);


// Call setGradient function to set the initial colors for the background
// Colors set in the index.html file (firstcolor: #4262c2, secondcolor: #4da163)
setGradient();

// Change the background colors
function setGradient() {
  body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
  css.textContent = body.style.background;
}

// Random color
function randomColor() {
  let hexColorValues = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexColorValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate both random colors
function randomGradient() {
  firstColor.value = randomColor();
  secondColor.value = randomColor();
  setGradient();
}

// Generate a random color on the left side
function firstRandom() {
  firstColor.value = randomColor();
  setGradient();
}

// Generate a random color on the right side
function secondRandom() {
  secondColor.value = randomColor();
  setGradient();
}

