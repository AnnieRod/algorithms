//creacion de la queue

function slNode(value) {
    this.val = value;
    this.next = null;
}

function slQueue() {
    this.head = null;
    this.tail = null; 

//Add a given value to the end of the queue
    this.enqueue = function(value) {
        var nodeNew = new slNode(value);

        if(!head) {
            head = nodeNew;
            tail = nodeNew;
        }

        else {
            tail.next = nodeNew;
            tail = tail.next;
        }
        return this;

    }

//return the value at front of the queue WITHOUT REMOVING IT
    this.front = function() {
        if (!head) {
            console.log ("empty queue, try adding some values before using this");
        }
        else {
            return this.head.val;
        }
    }

//check if the queue is empty
    this.isEmpty = function () {
        if (!head) {
            return true;
        }
        else {
            return false;
        }
    }

//remove and return the value at front
    this.dequeue = function () {
        var temp = head.val;
        head = head.next;
        return temp;
    }

//return if the queue contains some given value
    

}   