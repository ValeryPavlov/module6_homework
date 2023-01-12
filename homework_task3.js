//Задание №3.

function firstNum(num1){
    return function secondNum(num2){
        return num1 + num2;
    }
}

const resultSum = firstNum(+prompt("Введите первое число:"));

console.log(`Сумма равна: ${resultSum(+prompt("Введите второе число"))}`);

