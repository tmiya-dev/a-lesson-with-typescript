const fib = (n:number): number => {
    if (n < 0) {
        throw new Error(`out of range argument: ${n}`)
    }
    if (n == 0 || n == 1) {
        return 1
    }
    return fib(n - 2) + fib(n - 1)
}

export default fib
