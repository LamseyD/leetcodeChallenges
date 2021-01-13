const isBalanced = (root) => {

    if (!root)
        return true

    let i = height(root.left)
    let j = height(root.right)



    if (Math.abs(i - j) <= 1 && isBalanced(root.left) && isBalanced(root.right))
        return true

    return false
}

height = (node) => {
    if (node == null)
        return 0
    
    return (1 + Math.max(height(node.left), height(node.right)))
}

export default isBalanced