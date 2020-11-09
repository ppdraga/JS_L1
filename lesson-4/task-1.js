// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
// ‘десятки’: 4, ‘сотни’: 2} . Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.


var number = parseInt(prompt('Введите число '))

function NumberToObj(number) {
    let temp = new Array();
    while(number > 0) {
        temp.push(number % 10)
        number = Math.floor(number / 10)
        // console.log(temp)
    }
    let result = {
        'единицы': temp[0],
        'десятки': temp[1], 
        'сотни': temp[2]
    };
    return result;
}

if (number>999) {
    console.log('Число должно быть от 0 до 999');
} else {
    console.log(NumberToObj(number));
}
