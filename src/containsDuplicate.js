export const bruteForce = (nums) => {
    //traverse through array, sorted -> duplicates must be next to each other
    nums.sort()
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] === nums[i + 1]){
            return true
        }
    }
    return false

    //what's wrong with this approach?
    //Array is modified - Unnecessary
}

export const mapForce = (nums) => {
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        if (!map.get(nums[i])){
            map.set(nums[i], true)
        } else {
            return true;
        }
    }
    return false
    //What's wrong with this approach?
    //Map takes up space. 
}