// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


let i = 0;
while ( i <= 100) {
    let is_prime = true;
    for (let j = i - 1; j > 1; j--) {
        if (i % j == 0) {
            is_prime = false;
            break;
        }
    }
    if (is_prime) {
        console.log(i);
    }
    i++;
}