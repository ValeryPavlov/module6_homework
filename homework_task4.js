//Задание №4.

function numberInterval(num1, num2) {
    let i = num1;
    let intervalId = setInterval(function() {
        if (i > num2) {
            clearInterval(intervalId);
        } else {
            console.log(i);
            i++;
        }
    }, 1000);
}

numberInterval(1, 15);

