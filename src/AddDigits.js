const addDigits = (num) => {
    return num ? (1 + ((num - 1) % 9)) : 0
}

export default addDigits