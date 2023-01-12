//Задание №5.

let exponent = (x,n) => {

    if(x >= 1 && n>=1){
        if( x%1 !==0 || n%1 !==0 )
            return "Число не натуральное"
        else
            return Math.pow(x,n);
    }
}

console.log(exponent(2, 2));