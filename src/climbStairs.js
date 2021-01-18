const climbStairs = (n) => {

    return fib(n+1)
}
//Dynamic Programming to lower the time complexity
const fib = (n) => {
    let arr = [0,1]

    for (let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}

export default climbStairs