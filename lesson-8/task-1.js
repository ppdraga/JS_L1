
//1. Продумать, где можно применить замыкания для практикума из седьмого урока.

/* Переменная  score в программе объвлена как глобальная но исползуется
только в одной функции isFood таким образом ее можно защитить создав замыкание*/

//var score = 0;
var isFood = isFoodOuter();

function isFoodOuter() {
    var score = 0;
    function isFoodInner(unit) {
      if(unit.classList.contains('food-unit')) {
        unit.classList.remove('food-unit');
        score++;
        document.querySelector('#score').textContent = score;
        console.log(score);
        SNAKE_SPEED = 300 - score * 5;
        clearInterval(interval);
        interval = setInterval(move, SNAKE_SPEED);
        createFood();
        return true;
      } else {
        return false;
      }
    }
    return isFoodInner;
  }
