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

class CircularQueue {
  constructor(size) {
    this.queue = Array(size).fill(null);
    this.front = 0;
    this.end = this.front;
  }

  isEmpty() {
    return this.queue[this.front] === null && this.front === this.end;
  }

  isFull() {
    return this.queue[this.front] !== null && this.front === this.end;
  }

  enqueue(element) {
    if (this.isFull()) this.dequeue();
    this.queue[this.front] = element;
    this.front = (this.front + 1) % this.queue.length;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let result = this.queue[this.end];
    this.queue[this.end] = null;
    this.end = (this.end + 1) % this.queue.length;
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
