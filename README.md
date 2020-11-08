# Stacks_Queues
 
 Q: how can/should I visualize A Stack?:
 A: we can think of them as plates and as the structure grows
    it grows vertically or along the 'y' axis. 
    we can only access the latest stacked plate or the very top of 'y' || 'n'th stacked plate, which means when accessing this datastructure 'stack' we move through it top down, or latest to first this is known as 'LIFO'

Q: Can we expand on LIFO?: 
A: It is 'Last in, First Out' ; which is to say The last item in is the first item taken out || or latest item propagated from the stacks root is the first to be read/accessed

Q: Run-time(s) of stack operations? 
A: lookup O(n) ( because the stack can grow to n size ),
   pop O(1), push O(1), peek O(1)

Q: what are the main methods used against stacks?:
A: pop, push, peek

Q: what does stack.pop() do?:
A: remove last item from stack

Q: what does stack.push() do?:
A: add a plate to the end of the stack stack
   or top of stack 

Q: where do we see stacks in other places?
A: in lang specific engines ( stack-overflow ),
   within functions, browser-history 

Q: what is stack overflow?:
A: when a stack is overflowing - similar to memory leaks
    when the call stack ( data structure ) gets too large for the memory to keep it within memory || memory runs out due to the size of stack

Q: What does a call stack look like?:
A: // this is a call stack 
    console.log('bottom');
    console.log('second-from top');
    console.log('last but first accessed');


::: Qeueus | FIFO :::

Q: what is a qeueue?:
A: Data-structure similar to Stack yet opposite flow it operates as FIFO

Q: What is FIFO?:
A: FIFO is the opposite to LIFO 

    more detail on FIFO:

     it means first in first our || first item in the qeueue is the first to be released, which is the opposite of last in first out, which is to say the late item in the structure ( stack ) is the first one available for access

Q: what are Qeueus operations run-time(s)?:
A: lookup O(n), enqueue O(1) , dequeue O(1) , peek O(1)

Q: where do we see these queues in programming?:
A: restaraunt checkin app(s) : first to order table gets table , uber : requesting ride - first to order gets priority you're second, printer(s): first to print gets their document(s)

Q: What does enqueue accomplish on a Queue data-strcuture?:
A: add to queue at front of line / queue

Q: what does dequeue accomplish?:
A: remove person/element from queue at back of line / queue
    