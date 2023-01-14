
//STACK IMPLEMENTATON BASED ON ARRAY (Different than the usual methods)

function arrayStack(){
    var arr = [];


//add values to the stack (push)
    
    this.push = function(value) {
        arr[arr.length] = value;
        return this;
    }

//return WITHOUT REMOVING  the top value of the stack 
    
    this.top = function() {
        tophead = arr[arr.length-1];
        return tophead;
    }

//return if the stack is empty

    this.isEmpty = function() {
        if (arr.length == 0) {
            return true;
        }
        else {
            return false
        }
    }


//remove and return the top value (pop)

//check if the stack contains some value

//return the number of stacked values

}