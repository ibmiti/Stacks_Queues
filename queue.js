class Node {
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class Queue {
    constructor(){
        this.first  = null;
        this.last   = null;
        this.length = 0; 
    }
    peek(){
        return this.first;
    }
    // add to beginning of queue / list
    enqueue(value){
        const newNode = new Node(value);
        // if there is nothing in queue or in linked-list
        if(this.length === 0){
            // add the supplied data into linked-list / Queue 
            this.first = newNode;
            this.last  = newNode;
        } else {
            // if there is 
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    // remove from queue / line at the back similar to pop()
    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first === this.last){
            this.last = null;
        }
        // to keep track of the first element inputted in queue we created a holdingPointer
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return holdingPointer;
    }
    //isEmpty
}

const myQueue = new Queue();
myQueue.peek(); 
myQueue.enqueue('foo');
myQueue.enqueue('bar');
myQueue.dequeue();