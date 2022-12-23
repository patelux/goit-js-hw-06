// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('span#name-output');

const checkInput = (Event) => {
    spanValue.textContent = Event.currentTarget.value;
    if (!Event.currentTarget.value) {
        spanValue.textContent = 'Anonymous';
    }
};

inputValue.addEventListener('input', checkInput);