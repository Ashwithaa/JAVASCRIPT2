const num = 10;

function isEven(num){ //  Function Declaration
    return num % 2 === 0 ;
}

const isEven = function(num){ // Function Expression
     return num % 2 === 0;
}

const isEven = (num) =>{ // Arrow Function
    return num % 2 === 0;
}


console.log(isEven(num));