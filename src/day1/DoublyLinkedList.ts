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
export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head: Node<T> | null = null;

    constructor() {}

    prepend(item: T): void {
        this.printAll();
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    append(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
        } else {
            const tail = this.getTail(this.head);
            tail.next = node;
            node.prev = tail;
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        const nodeAtIdx = this.getNodeAtIndex(idx);
        console.log("nodeAtIdx", nodeAtIdx);
        if (!nodeAtIdx) {
            this.append(item);
        } else {
            const node = new Node(item);
            const prevNodeAtIdx = nodeAtIdx.prev;
            if (prevNodeAtIdx) {
                prevNodeAtIdx.next = node;
                node.prev = prevNodeAtIdx;
            }
            nodeAtIdx.prev = node;
            node.next = nodeAtIdx;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        const node = this.getNode(item);
        if (!node) {
            return undefined;
        } else {
            const prevNode = node.prev;
            const nextNode = node.next;
            if (prevNode) {
                prevNode.next = nextNode;
            } else {
                this.head = nextNode;
            }
            if (nextNode) {
                nextNode.prev = prevNode;
            }
            node.prev = null;
            node.next = null;

            this.length--;
            return node.data;
        }
    }

    get(idx: number): T | undefined {
        let node = this.head;
        for (let i = 0; i < idx; i++) {
            if (node) {
                node = node.next;
            }
        }
        return node ? node.data : undefined;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getNodeAtIndex(idx);
        if (!node) {
            return undefined;
        } else {
            const prevNode = node.prev;
            const nextNode = node.next;
            if (prevNode) {
                prevNode.next = nextNode;
            } else {
                this.head = nextNode;
            }
            if (nextNode) {
                nextNode.prev = prevNode;
            }
            node.prev = null;
            node.next = null;

            this.length--;
            return node.data;
        }
    }

    getTail(node: Node<T>): Node<T> {
        return node.next ? this.getTail(node.next) : node;
    }

    // HELPERS
    getNode(val: T): Node<T> | null {
        let curr = this.head;
        if (!curr) {
            return null;
        }
        while (curr && curr.data !== val) {
            curr = curr.next;
        }
        return curr;
    }

    getNodeAtIndex(idx: number): Node<T> | null {
        let node = this.head;
        for (let i = 0; i < idx; i++) {
            if (node) {
                node = node.next;
            }
        }
        return node;
    }

    printAll(): void {
        let curr = this.head;
        while (curr) {
            console.dir(curr, { depth: 10 });
            curr = curr.next;
        }
        console.log(`   length: ${this.length}`);
    }
}

class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;
    constructor(public data: T) {}
}

let list = new DoublyLinkedList();
list.prepend("C");
list.prepend("B");
list.prepend("A");
list.append("D");
list.append("E");
list.insertAt("Z", 3);
list.removeAt(4);
