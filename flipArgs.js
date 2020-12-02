// Created by - Manmeet Singh Parmar

/**
 * Create a util reverseArg
 * @function reverseArg.
 * @arg {arr} - the array of arguments to get it reversed.
 * @return {arr} - Reversed array.
 */

var reverseArg = function (arr) {
    const arrLen = arr.length;
    let start = 0;
    let end = arrLen - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

/**
 * Create a new flipArgs
 * @function flipArgs.
 * @param {function} - The function which will take arguments to reverse the value.
 * @return {function} - Function which will reversed arguments.
 */

 function flipArgs(func) {
    return (...params) => func(reverseArg(params));
}

/**
 * Create flipped and will be used to reverse the arguments.
 * @function flipped.
 * @arg {arr} - the array of arguments which needs to get it reversed.
 */

var flipped = flipArgs(function () {
    console.log(arguments);
});

flipped('a','b','c','d');















