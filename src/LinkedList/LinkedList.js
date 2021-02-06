class LinkedList {
    constructor(){
        this.head = null;
    }

    get = (index) => {
        let i = 0;
        let temp = this.head;
        while(temp.next !== null && i !== index){
            temp = temp.next;
            i++;
        }
        return temp.val;
    }
    addAtHead = (val) => {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    addAtTail = (val) => {
        let temp = this.head;
        while(temp.next !== null){
            temp = temp.next;
        }
        let newNode = new Node(val)
        temp.next = newNode;
    }

    addAtIndex = (index, val) => {
        let newNode = new Node(val);
        let i = 0;
        let temp = this.head;
        //if i = index and i < length
        while (i !== index - 1 && temp.next !== null){
            temp = temp.next;
            i++;
        }

        //if last element
        if (temp.next === null){
            temp.next = newNode;
        } else {
            let temp_2 = temp.next
            newNode.next = temp_2;
            temp.next = newNode;
        }
    }

    deleteAtIndex = (index) => {
        let i = 0;
        let temp = this.head;
        //if i = index and i < length
        while (i !== index - 1 && temp.next !== null){
            temp = temp.next;
            i++;
        }

        if (temp.next.next === null){
            temp.next = null
        } else {
            temp.next = temp.next.next
        }
    }

}

class Node {
    constructor(value){
        this.val = value
        this.next = null
    }
}