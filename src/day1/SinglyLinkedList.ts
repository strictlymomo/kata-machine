/*

============================
LINKED LIST
============================
DOES NOT HAVE A PREDETERMINED FIXED SIZE.

THERE ARE NO INDICES IN LINKED LISTS, YOU CAN ONLY TRAVERSE THE LIST

SINGLY-LINKED LIST
A --> B --> C --> D
^
get(i)                      // get head is standard
        getTail() ^         // done by traversing the nodes in the list


DOUBLY-LINKED LIST
A <-> B <-> C <-> D


WHAT A NODE LOOKS LIKE:
node<T>
    val: T                  // has a value
    next?: () => Node<T>    // has a method that gets the next value
    prev?L () => Node<T>    // doubly-linked list has a method that gets prev value


INSERTION AND DELETION IS FAST
        
    To INSERT F in-between A and B
        A <-> F <-> B <-> C <-> D
        Do four things, which takes O(1) constant time
        A -> F                  // set A.next as F
            F -> B              // set F.next as B
            F <- B              // set B.prev as F
        A <- F                  // set F.prev as A
    
    To DELETE C
        A <-> B <-> C <-> D
        Do 4 things, which takes O(1) constant time.
              B --------> D     // B.next = C.next. gotta get access to D via C.next
              B <-------- D     // D.prev = C.prev, which is B
        break B <-- C           // C.prev = null
        break       C --> D     // C.next = null
        then return C.val


TIME AND SPACE COMPLEXITY
A --> B --> C --> D --> null
- get head                  O(1)
- get tail                  O(n) || O(1)    // O(1) if storing a ref to tail (C.next)
- prepend                   O(1) 
- append                    O(n) || O(1)    // O(1) if storing a ref to tail (C.next)
- deletion from ends        O(n) || O(1)    // O(1) if storing a ref to tail (C.next). don't forget to set new nulls
- insertion in the middle   O(n) + O(1)     // see above
- deletion in the middle    O(n) + O(1)     // see above
- get in general            O(n)            // worst case have to traverse a lot

interface LinkedList<T> {
    get length():                       number;
    insertAt(item: T, index: number):   void;
    remove(item: T):                    T | undefined;
    removeAt(index: number):            T | undefined;
    append(item: T):                    void;
    prepend(item: T):                   void;
    get(index:number):                  T | undefined;
}
*/
export default class SinglyLinkedList<T> {
    private head: T | null;
    private tail: T | null;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(item: T): void {
        // const newest = item;
        // newest.next = this.get(0);
    }
    append(item: T): void {}
    remove(item: T): T | undefined {
        return undefined;
    }

    get(idx: number): T | undefined {
        return undefined;
    }

    insertAt(item: T, idx: number): void {}
    removeAt(idx: number): T | undefined {
        return undefined;
    }

    printAll() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;
    constructor(public data: T) {}
}
