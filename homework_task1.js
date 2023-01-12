//Задание №1.

let arr = [1, 30, "a", 20, "n", 0];

function evenOddArr(arr) {

    let zero = 0;
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                zero++;
            } else if ((arr[i] % 2) === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
console.log(`Количество нулевых значений - ${zero}`);
console.log(`Количество нечетных чисел - ${odd}`);
console.log(`Количество четных чисел - ${even}`);
}

evenOddArr(arr);
