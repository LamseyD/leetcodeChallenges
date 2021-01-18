const backspaceCompare = (S, T) => {
    let a = ''
    let b = ''
    let i = 0

    let limit = 0
    if (S.length >= T.length)
        limit = S.length
    else 
        limit = T.length

    while (i < limit){
        if (i < S.length){
            if (S.charAt(i) !== '#'){
                a = a.padEnd(a.length + 1, S.charAt(i))
            } else {
                if (a !== ''){
                    a = a.substring(0, a.length - 1)
                }
            }
        }

        if (i < T.length){
            if (T.charAt(i) !== '#'){
                b = b.padEnd(b.length + 1, T.charAt(i))
            } else {
                if (b !== ''){
                    b = b.substring(0, b.length - 1)
                }
            }
        }
        i++
    }

    //.pop and .append
    return a === b
}

const backspaceCompareOptimized = (S, T) => {
    let sStack = ''
    let item
    for (item of S.split('')){
        if (item !== '#'){
            sStack = sStack.padEnd(sStack.length + 1, item)
        } else if (sStack.length != 0){
            sStack = sStack.substring(0, sStack.length - 1)
        }
    }

    let tStack = ''
    for (item of T.split('')){
        if (item !== '#'){
            tStack = tStack.padEnd(tStack.length + 1, item)
        } else if (tStack.length != 0){
            tStack = tStack.substring(0, tStack.length - 1)
        }
    }

    return tStack === sStack

}

export default backspaceCompare