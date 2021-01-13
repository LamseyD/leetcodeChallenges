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

    height = () => {
        if (this == null)
            return 0

        return (1 + Math.max(height(this.left), height(this.right)))
    }
}

export default Node