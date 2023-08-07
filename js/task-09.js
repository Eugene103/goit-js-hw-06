const widget = document.body
const nameColor = document.querySelector(`.color`)
const btnColor = document.querySelector(`.change-color`)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


btnColor.addEventListener(`click`, changeColor)

function changeColor(evt) {
let randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
  console.log(randomColor)
  
}
