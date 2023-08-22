/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Object Creation Patterns
 *
 * Circular Queue
 *
 * https://launchschool.com/exercises/1becc424
 */

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class CircularQueue {
  constructor(size) {
    this.maxSize = size;
    this.size = 0;
    this.first = null;
    this.last = this.first;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  enqueue(element) {
    if (this.isFull()) this.dequeue();

    let node = new Node(element, null);

    if (this.isEmpty()) this.first = node;
    else this.last.next = node;

    this.last = node;
    this.size += 1;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let result = this.first.element;
    this.first = this.first.next;
    this.size -= 1;
    return result;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
