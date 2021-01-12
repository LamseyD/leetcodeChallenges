import TreeNode from './treeNode.js'

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert = (data) => {
        var newNode = new Node(data); 
                      
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === null) 
            this.root = newNode; 
        else
            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode); 
    }

    insertNode = (node, newNode) => {
            // if the data is less than the node 
    // data move left of the tree  
        if(newNode.data < node.data) { 
            // if left is null insert node here 
            if(node.left === null) 
                node.left = newNode; 
            else
    
                // if left is not null recur until  
                // null is found 
                this.insertNode(node.left, newNode);   
    
        // if the data is more than the node 
        // data move right of the tree  
        } else { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
    
                // if right is not null recur until  
                // null is found 
                this.insertNode(node.right,newNode); 
        } 
    }

    remove = (data) => {
            // if the root is null then tree is  empty
        this.root = this.removeNode(this.root, data)
    }
    
    removeNode = (node, key) => {
        if(node === null) 
            return null; 

        // if data to be delete is less than  
        // roots data then move to left subtree 
        else if(key < node.data) { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 

        // if data to be delete is greater than  
        // roots data then move to right subtree 
        else if(key > node.data) { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } 

        // if data is similar to the root's data  
        // then delete this node 
        else { 
            // deleting node with no children 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 

            // deleting node with one children 
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
            
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 

            // Deleting node with two children 
            // minumum node of the rigt subtree 
            // is stored in aux 
            var aux = this.findMinNode(node.right); 
            node.data = aux.data; 

            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        }
    }
}

export default BinarySearchTree