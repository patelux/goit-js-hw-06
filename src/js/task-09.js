function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyItem = document.querySelector('body');
const buttonItem = document.querySelector('.change-color');
const spanItem = document.querySelector('.color');

function changeColor(event) {
  const getColor = getRandomHexColor();
  bodyItem.style.backgroundColor = `${getColor}`;
  spanItem.textContent = `${getColor}`;
}
buttonItem.addEventListener('click', changeColor);