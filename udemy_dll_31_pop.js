/*
JavaScript Algorithms and Data Structures Masterclass

DLL pop

Implement the following on the DoublyLinkedList class

pop

This function should remove a node at the end of the DoublyLinkedList.  It should return the node removed.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
      let node = new Node(val);
      if(this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.length++;
      return this;
    }

    pop(){
      if(this.length === 0) {
        return undefined;
      }
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      return temp;
    }
}