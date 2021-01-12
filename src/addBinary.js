const addBinary = (a,b) => {

    let result = ''
    let carry = false

    //a.length < b.length
    if (a.length < b.length)
        a = a.padStart(b.length, '0')
    else if (a.length > b.length)
        b = b.padStart(a.length, '0')

    let i = a.length - 1


    while (i >= 0){
        let tempResult = ''
        let tempA = a.charAt(i) - '0' //temp_a = 0 or 1
        let tempB = b.charAt(i) - '0'
        let tempSum = 0
        if (carry)
            tempSum = tempA + tempB + 1
        else 
            tempSum = tempA + tempB
        

        
        if (tempSum == 0 || tempSum == 1){
            carry = false
            result = result.padStart(result.length + 1, tempSum.toString())
        }else {
            carry = true
            if (tempSum == 2){
                result = result.padStart(result.length + 1, '0')
            }else
                result = result.padStart(result.length + 1, '1')
        }
        i--
    }

    if (carry)
        result = result.padStart(result.length + 1, '1')
    return result
}

/*
2 = 10
3 = 11
4 = 100

111 = 4 + 3 = 7

3 + 7 
111
011
1010
8 + 2
*/

export default addBinary
