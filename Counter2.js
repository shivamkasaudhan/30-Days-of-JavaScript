/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init || 0;
    const increment = function() {
        count++;
        return count;
    }
    const decrement = function() {
        count--;
        return count;
    }
    const reset = function() {
        count = init || 0;
        return count;
    }
    return {increment, decrement, reset}; 
};


const counter = createCounter(251)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
 