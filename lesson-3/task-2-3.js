// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.

// 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice , которая будет считать стоимость корзины.

var cart = [
    {
        product: 'Prod1',
        quantity: 2,
        price: 1000
    },
    {
        product: 'Prod2',
        quantity: 3,
        price: 500
    },
]

function countBasketPrice(cart) {
    let result = 0;
    for (i in cart) {
        result += cart[i].quantity * cart[i].price;
    }
    return result;
}

console.log(countBasketPrice(cart));