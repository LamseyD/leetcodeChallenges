let isOneBitCharacter = (bits) => {
    while(bits.length > 1){
        let current = bits.shift()
        if (current == 1)
            bits.shift()
    }
    if (bits.length == 0)
        return false
    return bits[0] == 0
}

//take off 2 if it's a 1, take off 1 if it's a 0. If left with 0 then true else false
console.log(isOneBitCharacter([1,1,1,0]))