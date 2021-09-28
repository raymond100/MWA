const fibonacci = (num, memo={}) =>{
    // positive integer
    num < 0 ? num = Math.abs(num) : num;
    // base case memoization
    if(num in memo) return memo[num];
    // base case recursive of fib
    if(num <= 2) return 1;
    // store value in memo
    memo[num] =  fibonacci(num-1,memo) + fibonacci(num-2,memo);

    return memo[num];
}

module.exports = fibonacci;