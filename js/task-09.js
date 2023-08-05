const widget = document.querySelector(`.widget`)
const nameColor = document.querySelector(`.color`)
const btnColor = document.querySelector(`.change-color`)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnColor.addEventListener(`click`, changeColor)

function changeColor(evt) {
  widget.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor()
  
}
