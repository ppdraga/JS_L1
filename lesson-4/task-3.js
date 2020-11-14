// 3. Продолжить работу с интернет-магазином:

// 3.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
//      объектами можно заменить их элементы?
// 3.2. Реализуйте такие объекты.
// 3.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let cart = {
    products: [
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
    ],
    countBasketPrice() {
        let result = 0;
        for (i in this.products) {
            result += this.products[i].quantity * this.products[i].price;
        }
        return result;
    }

}

console.log(cart)
console.log(cart.countBasketPrice());
