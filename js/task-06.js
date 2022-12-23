// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
const inputItem = document.querySelector('#validation-input');
// console.log(inputItem);
const validCount = inputItem.getAttribute('data-length');
// console.log(validCount);

const checkInputLenght = (Event) => {
    if (inputItem.value.length <= validCount) {
        Event.currentTarget.classList.add('valid')
    } else 
    { Event.currentTarget.classList.add('invalid'); }
    return;
    };

   
inputItem.addEventListener('blur', checkInputLenght);


