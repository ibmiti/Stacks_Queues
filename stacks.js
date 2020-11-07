// Stacks 
// we can implement stacks using linked-list or arrays

// Linked list would be better to implement stacks with 
// due to speed of access 

class Node {
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    // add to top of stack or end of linked-list
    push(value){
        // instantiate new node from class
        // ... containing a value + pointer
        const newNode = new Node(value);
        // check if stack is empty
        if(this.length === 0){
            // if it is empty ...
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // if linked-list has value already, add to to top the new node
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if (!this.top){
            return null;
        }
        // if one node left - make the bottom null
        if (this.top === this.bottom){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
    //isEmpty
}

const myStack = new Stack();
// LIFO : Last in First out
myStack.push('google');
myStack.push('udemy');
