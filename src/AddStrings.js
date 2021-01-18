const addStrings = (a, b) => {
    let result = ''
    if (a.length < b.length)
        a = a.padStart(b.length, '0')
    else if (a.length > b.length)
        b = b.padStart(a.length, '0')

    let i = a.length - 1

    let carry = false

    while (i >= 0){
        let temp = 0
        temp = (a.charAt(i) - '0')  + (b.charAt(i) - '0')

        if (carry){
            temp += 1
            carry = false
        }

        if (temp >= 10){
            carry = true
            temp = temp % 10
        }
        result = result.padStart(result.length + 1, temp.toString())
        i--
    }

    if (carry)
        result = result.padStart(result.length + 1, '1')
        
    return result
}

export default addStrings