const binaryTreePath = (root) => {
    let result = []
    // result = (traverseTree(root))
    //contains the root node
    if (!root)
        return []
    else {
        result = traverseTree(root, [])
    }
    console.log(result)
    return result
} 

const traverseTree = (root, path) => {
    let result = []
    let temp = path
    if (!root.left && !root.right){
        console.log(`path at external node: ${path}`)
        return ([...path, root.value])
    } else {
        path.push(root.value)
        if (root.left){
            console.log(`path for left child: ${path}, root.value: ${root.value} root.left: ${root.left.value}`)
            result.push(traverseTree(root.left, path))
        }

        if (root.right){
            console.log(`path for right child: ${temp}, root.value: ${root.value} root.right: ${root.right.value}`)
            result.push(traverseTree(root.right, temp))
        }
    }
    return result
}
//arr = [1,2,3]
//brr = [...arr, 4] = [1,2,3,4]
//[[1,2,15], [1,2,7], [1,2]]
//[[1,2,5], [1,3]]
export default binaryTreePath