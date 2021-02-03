//Brute force would be at each node, find value and then search from the top for keys greater than it then store them in an array
//n^2

//go down to the bottom right first -> no change
//a root node always adds everything on the right
let sum = 0

const convertBST = (root) => {
    sum = 0
    convertUtil(root)

    return root
} 

//traverse all the nodes backwards and store the current sum into sum
const convertUtil = (root) => {
    if (!root)
        return
    convertUtil(root.right)

    sum = sum + root.val

    root.val = sum

    convertUtil(root.left)
}
