//Задание №2.

function simpleNumber(num) {
    if (typeof num != "number" || num == NaN) {
        console.log("Данные неверны");
        return;
    }
    if (num > 1000) {
        console.log("Данные неверны. Введите число менее 1000");
        return;
    }
    if (num == 0 || num == 1) {
        console.log("Число не является простым");
        return;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log("Число не является простым");
            return;
        }
    }
    console.log("Число является простым");
}

simpleNumber(111);

