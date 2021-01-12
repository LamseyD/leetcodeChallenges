class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

    setLeft = (node) => {
        this.left = node 
    }

    setRight = (node) => {
        this.right = node
    }
}

export default Node