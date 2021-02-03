//brute force -- keep count of characters
export const countAndSay = (n) => {
    //base cases here
    if (n == 1) return "1"
    if (n == 2) return "11"

    let result = "11"
    for (let i = 3; i <= n; i++){
        result += "$"
        let count = 1 //count of matching chars
        let tmp = "" //initialize the result of i-th term here
        let arr = result
        for (let j = 1; j < result.length; j++){
            if (arr.charAt(j) !== arr.charAt(j-1)){
                tmp += count;
                tmp += arr.charAt(j-1)
                count = 1
            } else {
                count ++;
            }
        }
        result = tmp
    }
    return result
}

export const optimal = (n) => {
    if (n == 1) return "1"
    if (n == 2) return "11"

    return util(optimal(n-1))
}

const util = (str) => {
    let temp = "";
    str += "$" //padding to make sure it counts the last character
    let count = 1;
    for (let i = 1; i < str.length; i++){
        if (str[i] !== str[i-1]){
            temp += count + str[i-1]
            count = 1
        } else {
            count++
        }
    }
    return temp
}