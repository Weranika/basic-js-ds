const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = undefined;
    this.last = null;    
    //this.next = null;
  }
  
  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    const node = new ListNode(value);
    
    if (this.value == undefined) {
      this.value = node;
      this.last = node;
    } else {      
      this.last.next = node;
      this.last = node;
    }    
  }

  dequeue() {
    let firstValue = this.value.value;
    this.value = this.value.next;
    return firstValue;
  }
}

module.exports = {
  Queue
};
