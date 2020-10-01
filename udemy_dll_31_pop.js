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
        this.val = val
        this.next = null;      
    }
    push(){
    }