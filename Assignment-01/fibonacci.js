const fibonacci = (num, memo = {}) => {
    try {
        // positive integer
        num = Math.abs(parseInt(num));
        // base case memoization
        if (num in memo) return memo[num];
        // base case recursive of fib
        if (num <= 2) return 1;
        // store value in memo
        memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

        return memo[num];

    } catch (error) {
        console.error(`An error has occurred.${error}`);
    }

}

console.log(fibonacci(process.argv[2]));
module.exports = fibonacci;