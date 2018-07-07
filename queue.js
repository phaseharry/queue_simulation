function Queue() {
  this.front = null;
  this.back = null;
}

//adds to the back of the queue
Queue.prototype.enqueue = function(value) {
  let node = new Node(value);
  if (this.front) {
    node.previous = this.back;
    this.back.after = node;
    this.back = node;
  } else {
    this.front = node;
    this.back = node;
  }
};

//moves first item out (Queues are first in first out FIFO)
Queue.prototype.dequeue = function() {
  if (this.front) {
    this.front.after.previous = null;
    this.front = this.front.after;
  } else {
    throw 'Queue is empty.';
  }
};

//finds out who is in the back??
Queue.prototype.peek = function() {
  if (this.back) {
    return this.back.value;
  } else {
    throw 'Queue is empty';
  }
};

//empties queue
Queue.prototype.clear = function() {
  this.front = null;
  this.back = null;
};

//checks if the queue has any values
Queue.prototype.isEmpty = function() {
  if (!this.front) {
    return true;
  } else {
    return false;
  }
};

//checks how long the actual queue is
Queue.prototype.length = function() {
  let length = 0;
  if (this.front) {
    let currentNode = this.front;
    while (currentNode) {
      length++;
      currentNode = currentNode.after;
    }
  }
  return length;
};

//finds a specific item in the queue
Queue.prototype.search = function(value) {
  let position = 0;
  let currentNode = this.front;
  while (currentNode) {
    position++;
    if (currentNode.value === value) return position;
    currentNode = currentNode.after;
  }
  return 'Cannot be found';
};

//constructor function used to create items for the queue
class Node {
  constructor(value) {
    this.value = value;
    this.after = null;
    this.previous = null;
  }
}
