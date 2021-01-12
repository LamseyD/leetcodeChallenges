import TreeNode from './binaryTree/treeNode.js'

const avgTreeLevels = (root) => {
    let result = [] //array to store the result
    let arr = [root]

    //each iteration will return the average of that level
    while (!arr.length == 0){
        //each iteration arr contains all the nodes of a certain level
        let sum = 0
        let count = 0
        let temp = []
        //push all the children into an empty array for next iteration
        while (!arr.length == 0){
            let n = arr[arr.length - 1]
            arr.pop()
            sum += n.value
            count++
            if (n.left)
                temp.push(n.left)
            if (n.right)
                temp.push(n.right)
        }

        arr = temp
        result.push(sum/count)
    }
    return result
}


const depth = (root) => {
    if (!root.left && !root.right)
        return 1
    else { 
        let leftDepth = 0
        let rightDepth = 0
        if (root.left)
            leftDepth = depth(root.left)

        if (root.right)
            rightDepth = depth(root.right)

        return(Math.max(leftDepth + 1, rightDepth + 1))
    }
}


export default avgTreeLevels