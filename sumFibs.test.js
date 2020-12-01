/**
 * Create a new sumFibs
 * @function sumFibs.
 * @param {Number} - Positive no whose sum of lesser odd fibonacci numbers has to be calculated.
 * @return {Number} - Sum of all Odd fibonacci numbers that are less than or equal to num.
 */

// function to Calculate sum of all odd fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
    if(num == 1 || num == 2)
        return 1;
    
    let a = 1;
    let b = 1;
    let currNum = a + b;
    let sumFib = 2;
    
    // fib(n) = fib(n-1) + fib(n-2);
    while(currNum <= num) {
        if(currNum & 1) 
            sumFib += currNum;
        a = b;
        b = currNum;
        currNum = a + b;
    }
    
    return sumFib;
}

/*
    // Test Case
    console.log(sumFibs(1000));
    console.log(sumFibs(4000000));
    console.log(sumFibs(3));
    console.log((sumFibs(4)));
    console.log((sumFibs(75024)));
    console.log((sumFibs(10)));
*/