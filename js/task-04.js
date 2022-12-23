// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const itemsValue = document.getElementById('value');
const listOfBtn = document.querySelectorAll('button');

const btnClickDecr= (Event) => {
    counterValue -= 1;
    itemsValue.textContent = counterValue;
    return counterValue;
};

const btnClickInc = (Event) => {
    counterValue += 1;
    itemsValue.textContent = counterValue;
    return counterValue;
};

listOfBtn[0].addEventListener("click", btnClickDecr);
listOfBtn[1].addEventListener("click", btnClickInc);

