// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
const inputItem = document.querySelector('#validation-input');
const validCount = Number(inputItem.getAttribute('data-length'));

const checkInputLenght = (Event) => {
    if (inputItem.value.length === validCount) {
       inputItem.classList.remove('invalid');
       inputItem.classList.add('valid');
    } else {
        inputItem.classList.remove('valid');
        inputItem.classList.add('invalid');
        }
    };
inputItem.addEventListener('blur', checkInputLenght);


