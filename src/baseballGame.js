const calPoints = (ops) => {
    let result = []

    ops.forEach((item) => {
        switch(item){
            case "D":
                doubleScore(result)
                break;
            case "C":
                clearScore(result)
                break;
            case "+":
                addScore(result)
                break;
            default:
                result.push(parseInt(item, 10))
                break;
        }
    })

    return result.reduce((accumulator, value) => accumulator + value, 0)
}

const doubleScore = (score) => {
    score.push(score[score.length - 1] * 2)
}

const clearScore = (score) => {
    score.pop()
}

const addScore = (score) => {
    score.push(score[score.length - 1] + score[score.length - 2])
} 

export default calPoints