// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputItem = document.querySelector('#font-size-control');
const spanItem = document.querySelector('#text');
spanItem.style.fontSize = inputItem.value + 'px';
const changeFontSize = (Event) => {
    spanItem.style.fontSize = Event.currentTarget.value + 'px';
};
inputItem.addEventListener('input', changeFontSize);
