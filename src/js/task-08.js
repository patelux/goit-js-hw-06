//Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formLogin = document.querySelector('.login-form');
const inputItem = document.querySelectorAll('input');
const submitBtn = document.querySelector('button');


function checkInputEmpty(event) {
    inputItem.forEach((input) => {
        if (!input.value) {
            alert(`Всі поля повинні бути заповнені`)
        }
        formLogin.addEventListener('submit', getAllValues)
    });
}

function getAllValues(event) {
    event.parentDefault();
    const { email, password } = event.currentTarget.elements;
    const dataArr = {
        email: email.value,
        password: password.value,
    };
    console.log(dataArr);
    event.currentTarget.reset();
}
submitBtn.addEventListener('click', checkInputEmpty);