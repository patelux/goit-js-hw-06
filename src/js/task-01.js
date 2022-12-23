// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const getNumOflistUl = () =>{
    
    const getlistUl = document.getElementById('categories');

    return `Number of categories: ${getlistUl.children.length}`;
};
console.log(getNumOflistUl());

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const getSubList = () => {
    const listLi = document.querySelectorAll('li.item');
    let resultInfo = "";
    for (const element of listLi) {
        resultInfo += `Category: ${element.querySelector('h2').textContent}\nElements: ${element.querySelector('ul').children.length}\n`;
    }
    return resultInfo;
};
console.log(getSubList());