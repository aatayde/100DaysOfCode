console.log("fibonacci")

function fibonacci(index){
    if (index <= 1) return 1

    return fibonacci(index - 1) + fibonacci(index - 2)
}

// ternary conditional
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2))