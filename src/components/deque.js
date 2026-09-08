class DequeNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class Deque {
    constructor() { 
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
}